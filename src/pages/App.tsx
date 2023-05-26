import Note from "@/components/Note";
import Navbar from "@/components/Navbar";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import Sidebar from "@/components/Sidebar";

const App = () => {
	const navigate = useNavigate();
	const { noteID } = useParams();
	return (
		<main id="app-page" className=" h-screen flex flex-col relative">
			<Navbar />
			<section id="content-section" className="flex-1 flex">
				<Sidebar />
				<Outlet />
			</section>
		</main>
	);
};

export default App;
