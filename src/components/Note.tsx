import { useParams, Outlet, useNavigate } from "react-router-dom";
const Note = ({ children }: React.ReactNode) => {
	const { noteID } = useParams();
	const navigate = useNavigate();
	return (
		<div id="note" className="flex-1 bg-vn-black">
			This is note {noteID}
			<button
				className="underline"
				onClick={(e) => {
					e.preventDefault();
					navigate(-1);
				}}
			>
				Back
			</button>
		</div>
	);
};

export default Note;
