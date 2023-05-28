import { useParams, Outlet, useNavigate } from "react-router-dom";
import Editor from "./editor/Editor";
import Preview from "./preview/Preview";
import SplitPane from "split-pane-react/esm/SplitPane";
import { Pane } from "split-pane-react";
import { useRef, useState } from "react";
const Note = () => {
	const { noteID } = useParams();
	const navigate = useNavigate();
	const [editorWidth, setEditorWidth] = useState<number>(0);
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

	function getCurrentEditorWidth(): void {
		const width = editorRef.current.style.width;
		console.log(width);
		setEditorWidth(width);
	}

	function onMovePane(e): void {
		const pane = e.target;
		const paneWidth = paneRef.current.style.width;
		console.log(paneWidth);
		// const mouseX = e.clientX;
		// const mouseY = e.clientY;
		// console.log(pane);
		// console.log({ x: mouseX, y: mouseY });
	}

	return (
		<section
			id="note"
			className="flex flex-1 bg-vn-dshade-black relative text-vn-white "
		>
			<Editor
				editorRef={editorRef}
				newWidth={editorWidth}
				input={input}
				onChange={handleEditorOnChange}
			/>
			<div
				ref={paneRef}
				onClick={getCurrentEditorWidth}
				onMouseMove={onMovePane}
				style={{ width: "6px" }}
				className=" h-full hover:bg-vn-outline-black transition-all active:bg-vn-dshade-white duration-150 ease-in-out select-none cursor-ew-resize  bg-vn-black box-content"
			/>
			<Preview markdownInput={input} />
		</section>
	);
};

export default Note;
