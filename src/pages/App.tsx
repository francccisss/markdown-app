import Note from "@/components/Note";
import Navbar from "@/components/Navbar";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import Sidebar from "@/components/Sidebar";
import SearchBar from "@/components/SearchBar";
import NoteItem from "@/components/NoteItem";

const App = () => {
	const navigate = useNavigate();
	const { noteID } = useParams();
	const noteItems = [
		{
			id: "0",
			title: "Title 1",
			desc: "[x] This is some random description for this note item dwadlkajwdaw",
			path: "/app/task0",
		},
		{
			id: "1",
			title: "Title 2",
			desc: "# This is some random description for this note item dwadjawiodj",
			path: "/app/task1",
		},

		{
			id: "3",
			title: "Title 3",
			desc: "o This is some random description for this note item",
			path: "/app/task2",
		},

		{
			id: "4",
			title: "Title 4",
			desc: "Random description for this note item",
			path: "/app/task3",
		},
	];

	function handleSearchInput(e: React.ChangeEvent<HTMLInputElement>): void {
		console.log(e.target.value);
	}
	return (
		<main id="app-page" className=" h-screen flex flex-col relative ">
			<Navbar />
			<section id="content-section" className="flex-1 flex">
				<Sidebar>
					<SearchBar handleInput={handleSearchInput} />
					<ul
						id="notes-list"
						className="flex flex-col  border-t-[1px] border-t-vn-outline-black gap-3 "
					>
						{noteItems.map((note) => {
							return <NoteItem note={note} />;
						})}
					</ul>
				</Sidebar>
				<Outlet />
			</section>
		</main>
	);
};

export default App;
