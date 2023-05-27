import Note from "@/components/Note";
import Navbar from "@/components/Navbar";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import Sidebar from "@/components/Sidebar";
import SearchBar from "@/components/SearchBar";

const App = () => {
	const navigate = useNavigate();
	const { noteID } = useParams();
	function handleSearchInput(e: React.ChangeEvent<HTMLInputElement>): void {
		console.log(e.target.value);
	}
	return (
		<main id="app-page" className=" h-screen flex flex-col relative ">
			<Navbar />
			<section id="content-section" className="flex-1 flex">
				<Sidebar>
					<SearchBar handleInput={handleSearchInput} />
				</Sidebar>
				<Outlet />
			</section>
		</main>
	);
};

export default App;
