import { useParams, Outlet, useNavigate } from "react-router-dom";
import Editor from "./Editor";
import Preview from "./Preview";
const Note = () => {
	const { noteID } = useParams();
	const navigate = useNavigate();
	return (
		<section
			id="note"
			className="flex flex-1 bg-vn-dshade-black relative text-vn-white"
		>
			This is note {noteID}
			<button
				className="underline absolute top-3/4 "
				onClick={(e) => {
					e.preventDefault();
					navigate(-1);
				}}
			>
				Back
			</button>
			<Editor />
			<Preview />
		</section>
	);
};

export default Note;
