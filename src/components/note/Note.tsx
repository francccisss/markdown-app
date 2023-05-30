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
	const [paneWidth, setPaneWidth] = useState<number>(500);
	const [currentPanePos, setCurrentPanePos] = useState<number>();
	const [isResizing, setIsResizing] = useState<number>(0);
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

	function handleOnMouseDown(e: React.MouseEvent): void {
		setIsResizing(e.clientX);
	}

	function resizePane(e: React.MouseEvent): void {
		const mouseX = e.clientX;
		let sideBar = document.getElementById("sidebar");

		// set editors width to mouseX's position - sidebar width
		// test need to know if sidebar is active or not cuase if active then we need to take into account
		// the width of the side bar which is 384px

		// does this go against react's principles of not manipulating the original DOM?
		// im just reading it so.. please tell me.
		if (isResizing !== 0) {
			if (sideBar?.className.includes("sidebar-inactive")) {
				setPaneWidth(mouseX);
				if (mouseX < 50) setPaneWidth(0);
			} else if (sideBar?.className.includes("sidebar-active")) {
				setPaneWidth(mouseX - 384);
			}
		}
	}

	return (
		<section
			id="note"
			className="flex flex-1 bg-vn-dshade-black relative text-vn-white w-full "
			onMouseMove={resizePane}
			onMouseUpCapture={() => {
				setIsResizing(0);
			}}
		>
			<Editor
				newWidth={paneWidth}
				input={input}
				onChange={handleEditorOnChange}
			/>
			<div
				onMouseDownCapture={handleOnMouseDown}
				className=" h-full z-10 hover:bg-vn-outline-black transition-all active:bg-vn-dshade-white duration-150 ease-in-out select-none cursor-ew-resize  active:w-[6px] w-[4px] bg-vn-black box-content"
			/>
			<Preview markdownInput={input} />
		</section>
	);
};

export default Note;
