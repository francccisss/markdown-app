import Navbar from "@/components/Navbar";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import NoteItem from "@/components/NoteItem";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import SidebarActions from "@/components/SidebarActions";
import Sidebar from "@/components/sidebar/Sidebar";
import { uid } from "uid";
import { INote } from "@/utils/Note";

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

	function handleSearchInput(e: React.ChangeEvent<HTMLInputElement>): void {
		console.log(e.target.value);
		setSearchInput(e.target.value);
	}

	const searchQuery = useCallback((input: string) => {
		if (input !== "") {
			// on each state changes the application rerenders so that it keeps
			// the UI in sync, notes in filter notes is referencing
			// the previous state before the re-render or state changes happened
			// so on each search query calls the state of notes still persist
			// even after rerendering and filtering its state
			const filterNotes = notes.filter((note) => note.title.includes(input));
			return setNotes(filterNotes);
		}
		return setNotes(notes);
	}, []);

	useEffect(() => {
		console.log(notes);
		searchQuery(searchInput);
	}, [searchInput]);

	async function addNote(): Promise<void> {
		const newID = uid(16).toString();
		const newNote: INote = {
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
