import { useParams, Outlet, useNavigate } from "react-router-dom";
import Editor from "./Editor";
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
			{/* <button
				className="underline absolute top-3/4 "
				onClick={(e) => {
					e.preventDefault();
					navigate("/");
				}}
			>
				Back
			</button> */}
			{/* <SplitPane split="vertical" sizes={sizes} onChange={setSizes}>
				<Pane className="pane" maxSize={"50%"} minSize={"1px"}>
					<Editor />
				</Pane> 
				<Preview />
					<Editor />
			</SplitPane> */}

			<Editor />
			<Preview />
		</section>
	);
};

export default Note;
