import Navbar from "@/components/Navbar";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import NoteItem from "@/components/NoteItem";
import {
	createContext,
	useCallback,
	useEffect,
	useMemo,
	useRef,
	useState,
} from "react";
import SidebarActions from "@/components/SidebarActions";
import Sidebar from "@/components/sidebar/Sidebar";
import { uid } from "uid";
import { INote } from "@/utils/Note";

export const NoteContext = createContext([]);
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
		},
		{
			id: "1",
			title: "Title 2",
			md: "# This is some random mdription for this note item dwadjawiodj",
		},

		{
			id: "3",
			title: "Title 3",
			md: "o This is some random mdription for this note item",
		},

		{
			id: "4",
			title: "Title 4",
			md: "Random mdription for this note item",
		},

		{
			id: "5",
			title: "Title 5",
			md: "Random mdription for this note item",
		},

		{
			id: "6",
			title: "Title 6",
			md: "mdription for this note item",
		},

		{
			id: "7",
			title: "Title 7",
			md: "> Note item for this note item",
		},
	]);
	// created searchedNotes so that when searching for notes search query function
	// so that we don't directly set the original notes
	const [searchedNotes, setSearchedNotes] = useState(notes);

	function handleSearchInput(e: React.ChangeEvent<HTMLInputElement>): void {
		console.log(e.target.value);
		setSearchInput(e.target.value);
	}

	const searchQuery = useCallback(
		(input: string, notesArr: Array<INote>) => {
			if (input !== "") {
				// on each state changes the application rerenders so that it keeps
				// the UI in sync, notes in filter notes is referencing
				// the previous state before the re-render or state changes happened
				// so on each search query calls the state of notes still persist
				// even after rerendering and filtering its state
				const filterNotes = notesArr.filter((note) =>
					note.title.includes(input)
				);
				return setSearchedNotes(filterNotes);
			}
			return setSearchedNotes(notes);
		},
		[notes]
	);

	useEffect(() => {
		console.log(notes);
		searchQuery(searchInput, notes);
	}, [searchInput]);

	async function addNote(): Promise<void> {
		const newID = uid(16).toString();
		const newNote: INote = {
			id: newID,
			title: "New Note",
			md: "This is a markdown notetaking app powered by vim keybindings",
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
						{searchedNotes.map((note) => {
							return <NoteItem key={note.id} note={note} />;
						})}
					</ul>
				</Sidebar>
				<NoteContext.Provider value={{ notes }}>
					<Outlet />
				</NoteContext.Provider>
			</section>
		</main>
	);
};

export default App;
