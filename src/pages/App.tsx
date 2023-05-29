import Note from "@/components/note/Note";
import Navbar from "@/components/Navbar";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import NoteItem from "@/components/NoteItem";
import { useCallback, useEffect, useRef, useState } from "react";
import SidebarActions from "@/components/SidebarActions";
import Sidebar from "@/components/sidebar/Sidebar";
import { uid } from "uid";

const App = () => {
	const navigate = useNavigate();
	const { noteID } = useParams();
	const [searchInput, setSearchInput] = useState<string>("");
	const sideBarRef = useRef<HTMLDivElement>();
	const [notes, setNotes] = useState([
		{
			id: "0",
			title: "Title 1",
			md: "[x] This is some random mdription for this note item dwadlkajwdaw",
			path: "/app/task0",
		},
		{
			id: "1",
			title: "Title 2",
			md: "# This is some random mdription for this note item dwadjawiodj",
			path: "/app/task1",
		},

		{
			id: "3",
			title: "Title 3",
			md: "o This is some random mdription for this note item",
			path: "/app/task2",
		},

		{
			id: "4",
			title: "Title 4",
			md: "Random mdription for this note item",
			path: "/app/task3",
		},

		{
			id: "5",
			title: "Title 5",
			md: "Random mdription for this note item",
			path: "/app/task4",
		},

		{
			id: "6",
			title: "Title 6",
			md: "mdription for this note item",
			path: "/app/task5",
		},

		{
			id: "7",
			title: "Title 7",
			md: "> Note item for this note item",
			path: "/app/task6",
		},
	]);
	const originalNotes = useRef([...notes]);
	function handleSearchInput(e: React.ChangeEvent<HTMLInputElement>): void {
		console.log(e.target.value);
		setSearchInput(e.target.value);
	}

	const searchQuery = useCallback((input: string) => {
		// Proud of this
		// Filter the notes state and using the originalNotes array as a referenece on WHAT to filter.
		// because we're filtering the state and then setting the filtered state as our new state
		// so if we backspace or delete some parts of the text that STILL matches the requirements of
		// note.title.includes, all of the note.title that currently matches the searchInput wont show up because
		// as stated ;) before, it has been filtered out, so we need a reference to the original state before
		// it was modified.
		if (input !== "") {
			const filterNotes = originalNotes.current.filter((note) =>
				note.title.includes(input)
			);
			return setNotes(filterNotes);
		} else {
			return setNotes(originalNotes.current);
		}
	}, []);
	useEffect(() => {
		console.log(searchInput);
		console.log(notes);
		searchQuery(searchInput);
	}, [searchInput]);

	interface INewNote {
		id: string;
		title: string;
		md: string;
		path: string;
	}
	async function addNote(): Promise<void> {
		const newID = uid(16).toString();
		const newNote: INewNote = {
			id: newID,
			title: "New Note",
			md: "This is a markdown notetaking app powered by vim keybindings",
			path: `/app/${newID}`,
		};
		setNotes((prev) => [newNote, ...prev]);
		console.log(newNote);
	}

	return (
		<main
			id="app-page"
			className=" h-screen w-screen flex flex-col relative "
		>
			<Navbar sideBarRef={sideBarRef} />
			<section id="content-section" className="flex-1 flex h-[0%]">
				<Sidebar sideBarRef={sideBarRef}>
					<SidebarActions
						searchInput={searchInput}
						handleInput={handleSearchInput}
						addNote={addNote}
					/>
					<ul id="notes-list" className="h-full ">
						{notes.map((note) => {
							return <NoteItem key={note.id} note={note} />;
						})}
					</ul>
				</Sidebar>
				<Outlet />
			</section>
		</main>
	);
};

export default App;
