import { useParams, Outlet, useNavigate } from "react-router-dom";
import Editor from "./editor/Editor";
import Preview from "./Preview";
import SplitPane from "split-pane-react/esm/SplitPane";
import { Pane } from "split-pane-react";
import { useState } from "react";
const Note = () => {
	const { noteID } = useParams();
	const navigate = useNavigate();
	const [sizes, setSizes] = useState(["50%"]);
	const [input, setInput] = useState("");
	return (
		<section
			id="note"
			className="flex flex-1 bg-vn-dshade-black relative text-vn-white"
		>
			<Editor />
			<Preview />
		</section>
	);
};

export default Note;
