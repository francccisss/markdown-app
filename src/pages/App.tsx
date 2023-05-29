import Note from "@/components/note/Note";
import Navbar from "@/components/Navbar";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import NoteItem from "@/components/NoteItem";
import { useRef } from "react";
import SidebarActions from "@/components/SidebarActions";
import Sidebar from "@/components/sidebar/Sidebar";

const App = () => {
	const navigate = useNavigate();
	const { noteID } = useParams();
	const sideBarRef = useRef<HTMLDivElement>();
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

		{
			id: "5",
			title: "Title 5",
			desc: "Random description for this note item",
			path: "/app/task4",
		},

		{
			id: "6",
			title: "Title 6",
			desc: "description for this note item",
			path: "/app/task5",
		},

		{
			id: "7",
			title: "Title 7",
			desc: "> Note item for this note item",
			path: "/app/task6",
		},
	];

	function handleSearchInput(e: React.ChangeEvent<HTMLInputElement>): void {
		console.log(e.target.value);
	}
	return (
		<main
			id="app-page"
			className=" h-screen w-screen flex flex-col relative "
		>
			<Navbar sideBarRef={sideBarRef} />
			<section id="content-section" className="flex-1 flex h-[0%]">
				<Sidebar sideBarRef={sideBarRef}>
					<SidebarActions handleInput={handleSearchInput} />
					<ul id="notes-list" className="h-full ">
						{noteItems.map((note) => {
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
