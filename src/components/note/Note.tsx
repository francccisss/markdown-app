import { useParams, Outlet, useNavigate } from "react-router-dom";
import Editor from "../editor/Editor";
import Preview from "../preview/Preview";
import { useContext, useEffect, useRef, useState } from "react";
import "./note.scss";
import { NoteContext } from "@/pages/App";
const Note = () => {
	const { noteID } = useParams();
	const navigate = useNavigate();
	const [paneWidth, setPaneWidth] = useState<number>(500);
	const [isResizing, setIsResizing] = useState<number>(0);
	const { notes, setNotes } = useContext(NoteContext);
	const [currentNote] = notes.filter((note) => note.id === noteID);
	const [loadNote, setLoadNote] = useState(false);

	function handleEditorOnChange(value: string): void {
		const editorMarkdownValue: string = value;
		setNotes((prev) => {
			const mapNotes = prev.map((note) => {
				if (note.id === noteID) {
					return { ...note, contents: editorMarkdownValue };
				}
			});
		});
	}

	useEffect(() => {
		setLoadNote(true);
	}, [noteID]);

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
		<>
			{loadNote && (
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
						input={currentNote.contents}
						onChange={handleEditorOnChange}
					/>
					<div
						onMouseDownCapture={handleOnMouseDown}
						className=" h-full z-10 hover:bg-vn-outline-black transition-all active:bg-vn-dshade-white duration-150 ease-in-out select-none cursor-ew-resize  active:w-[6px] w-[4px] bg-vn-black box-content"
					/>
					<Preview markdownInput={currentNote.contents} />
				</section>
			)}
		</>
	);
};

export default Note;
