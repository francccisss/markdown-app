import { useNavigate } from "react-router-dom";

const App = () => {
	const navigate = useNavigate();
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
		</main>
	);
};

export default App;
