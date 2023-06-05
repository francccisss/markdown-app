import { useParams, Outlet, useNavigate } from "react-router-dom";
import Editor from "../editor/Editor";
import Preview from "../preview/Preview";
import { useContext, useEffect, useRef, useState } from "react";
import "./note.scss";
import { IContextType, NoteContext } from "@/pages/App";
import { INote } from "@/utils/Note";
interface INoteContext {
	setNotes: (prev: Array<INote>) => any;
	notes: Array<INote>;
}

const Note = () => {
	const { noteID } = useParams();
	const navigate = useNavigate();
	const { notes, setNotes } = useContext(NoteContext);
	const [paneWidth, setPaneWidth] = useState<number>(500);
	const [isResizing, setIsResizing] = useState<number>(0);
	const [currentNote] = notes.filter((note: INote) => note.id === noteID);

	function handleEditorOnChange(value: string): void {
		const editorMarkdownValue: string = value;
		// filter this instead of mapping and append updated note
		const updateNote = {
			...currentNote,
			contents: editorMarkdownValue,
		};
		const filterNotes = notes.filter((note: INote) => note.id !== noteID);
		setNotes([updateNote, ...filterNotes]);
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
		// const maxWidth = (mouseX / window.innerWidth) * 100;
		const maxWidth = Math.floor(0.65 * window.innerWidth);
		if (isResizing !== 0 && mouseX < maxWidth) {
			if (sideBar?.className.includes("sidebar-inactive")) {
				setPaneWidth(mouseX);
				if (mouseX < 50) setPaneWidth(0);
			} else if (sideBar?.className.includes("sidebar-active")) {
				setPaneWidth(mouseX - 384);
				if (mouseX - 384 < 50) setPaneWidth(0);
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
			{currentNote && (
				<>
					<Editor
						newWidth={paneWidth}
						input={currentNote.contents}
						onChange={handleEditorOnChange}
					/>
					<div
						onMouseDownCapture={handleOnMouseDown}
						className=" h-full z-10 hover:bg-vn-outline-black transition-all active:bg-vn-dshade-white duration-150 ease-in-out select-none cursor-ew-resize  active:w-[6px] w-[4px] bg-vn-black box-content"
					/>
					<Preview markdownInput={currentNote.contents} />
				</>
			)}
		</section>
	);
};

export default Note;
