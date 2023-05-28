import { useParams, Outlet, useNavigate } from "react-router-dom";
import Editor from "../editor/Editor";
import Preview from "../preview/Preview";
import SplitPane from "split-pane-react/esm/SplitPane";
import { Pane } from "split-pane-react";
import { useRef, useState } from "react";
import "./note.scss";
import { connectFirestoreEmulator } from "firebase/firestore";
const Note = () => {
	const { noteID } = useParams();
	const navigate = useNavigate();
	const [editorWidth, setEditorWidth] = useState<number>(500);
	const [currentPanePos, setCurrentPanePos] = useState<number | undefined>();
	const editorRef = useRef();
	const paneRef = useRef();
	const [input, setInput] = useState<string>(`
This is a title
# Header 1
## jsCode snippet and some shit that i dont understand
		This is a code snippet
>Line break  
>Another Line Break

### This is a list
1. Ordered list item 1
2. Ordered list item 2
3. Ordered list item 3
	
\`\`\`js
const searchQuery = useCallback(
	(input: string, noteList: Array<{ title: string }>) => {
			const filterNotes = noteList.filter((note) => {
				return note.title.includes(input) && note;
			});
			console.log(filterNotes);
			if (input !== "") {
				return setNoteLists(filterNotes);
			}
			return setNoteLists(originalNotes);
		},
		[]
	);
\`\`\`\
	`);

	function handleEditorOnChange(value: string): void {
		const editorMarkdownValue: string = value;
		setInput(editorMarkdownValue);
	}

	function getPaneAndMousePosition(e: React.MouseEvent): void {
		const mouseX = e.clientX;
		const calculatePanePos = (mouseX / window.innerWidth) * 100;
		setCurrentPanePos((calculatePanePos / 100) * window.innerWidth);
		console.log({ pane: currentPanePos });
		console.log({ x: mouseX });
	}

	function resizePane(e: React.MouseEvent): void {
		const mouseX = e.clientX;
		// console.log(currentPanePos / window.innerWidth);
		console.log(currentPanePos);
		if (mouseX < currentPanePos) {
			console.log("decrement");
			setEditorWidth((prev) => prev - 20);
		}
		if (mouseX > currentPanePos) {
			console.log("increment");
			setEditorWidth((prev) => prev + 20);
		}
	}

	function resizingState() {
		return isResizing ? setIsResizing(false) : setIsResizing(true);
	}

	return (
		<section
			id="note"
			className="flex flex-1 bg-vn-dshade-black relative text-vn-white w-full "
			onMouseOver={resizePane}
		>
			<Editor
				editorRef={editorRef}
				newWidth={editorWidth}
				input={input}
				onChange={handleEditorOnChange}
			/>
			<div
				ref={paneRef}
				onMouseDownCapture={getPaneAndMousePosition}
				style={{ width: "6px" }}
				className=" h-full hover:bg-vn-outline-black transition-all active:bg-vn-dshade-white duration-150 ease-in-out select-none cursor-ew-resize  bg-vn-black box-content"
			/>
			<Preview markdownInput={input} />
		</section>
	);
};

export default Note;
