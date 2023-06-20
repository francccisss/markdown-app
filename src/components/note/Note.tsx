import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import Editor from "../editor/Editor";
import Preview from "../preview/Preview";
import { useCallback, useEffect, useState } from "react";
import "./note.scss";
import { IContextType } from "@/pages/App";
import { INote } from "@/utils/types/Note";
import { Vim } from "@replit/codemirror-vim";
import NoteInfoModal from "../NoteInfoModal";

const Note = () => {
	const { noteID } = useParams();
	const navigate = useNavigate();
	const { notes, setNotes, noteIDRef, writeNote, noteModalActive } =
		useOutletContext() as IContextType;
	const [paneWidth, setPaneWidth] = useState<number>(500);
	const [isResizing, setIsResizing] = useState<number>(0);
	const [currentNote] = notes.filter((note: INote) => note.id === noteID);

	function handleEditorOnChange(value: string): void {
		const editorMarkdownValue: string = value;
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

	const resizePane = useCallback(
		function (e: React.MouseEvent): void {
			// need to take into account the side menu and sidebar width plus box layouts
			const mouseX = e.clientX - 40;
			let sideBar = document.getElementById("sidebar");
			const maxWidth = Math.floor(0.65 * window.innerWidth);
			if (mouseX < maxWidth) {
				if (sideBar?.className.includes("sidebar-inactive")) {
					setPaneWidth(mouseX);
					if (mouseX < 80) setPaneWidth(0);
				} else if (sideBar?.className.includes("sidebar-active")) {
					setPaneWidth(mouseX - 384);
					if (mouseX - 384 < 80) setPaneWidth(0);
				}
			}
		},
		[isResizing]
	);

	Vim.defineEx("write", "w", writeNote);
	Vim.defineEx("quit", "q", () => setPaneWidth(0));
	Vim.defineEx("open", "o", () => setPaneWidth(0.6 * window.innerWidth));
	Vim.defineEx("help", "h", () => navigate("/app/vim-cheatsheet"));

	useEffect(() => {
		noteIDRef.current = noteID?.toString();
	}, [noteID]);

	window.onresize = () => {
		if (paneWidth !== 0) {
			setPaneWidth(600);
		}
	};

	return (
		<section
			id="note"
			className="flex flex-1 bg-vn-dshade-black relative text-vn-white w-full "
			onMouseMove={(e) => {
				if (isResizing !== 0) {
					resizePane(e);
				}
			}}
			onMouseUpCapture={() => {
				setIsResizing(0);
			}}
		>
			{noteModalActive && <NoteInfoModal note={currentNote} />}
			{currentNote && (
				<>
					<Editor
						newWidth={paneWidth}
						input={currentNote.contents}
						onChange={handleEditorOnChange}
					/>
					<div
						onMouseDownCapture={handleOnMouseDown}
						className=" h-full z-10 hover:bg-vn-outline-black active:bg-vn-dshade-white select-none cursor-ew-resize active:w-[6px] w-[4px] bg-vn-black box-content"
					/>
					<Preview markdownInput={currentNote.contents} />
				</>
			)}
		</section>
	);
};

export default Note;
