import Note from "@/components/Note";
import Navbar from "@/components/Navbar";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import Sidebar from "@/components/Sidebar";

const App = () => {
	const navigate = useNavigate();
	const { noteID } = useParams();
	return (
		<main>
			<h1>This is app page</h1>
			<button
				className="underline"
				onClick={(e) => {
					e.preventDefault();
					navigate(-1);
				}}
			>
				Back
			</button>

			<Navbar />
			<section>
				<Sidebar />
				<Outlet />
			</section>
		</main>
	);
};

export default App;
