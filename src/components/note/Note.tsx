import { useOutletContext, useParams } from "react-router-dom";
import Editor from "../editor/Editor";
import Preview from "../preview/Preview";
import { useContext, useEffect, useState } from "react";
import "./note.scss";
import { IContextType } from "@/pages/App";
import { INote } from "@/utils/types/Note";
import { Vim, vim } from "@replit/codemirror-vim";
import { closeEditorPane, writeNote } from "@/utils/vimCustomBindings";

const Note = () => {
	const { noteID } = useParams();
	const { notes, setNotes, noteIDRef } = useOutletContext() as IContextType;
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

	function resizePane(e: React.MouseEvent): void {
		const mouseX = e.clientX;
		let sideBar = document.getElementById("sidebar");
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

	Vim.defineEx("write", "w", () => {
		writeNote(currentNote);
	});

	Vim.defineEx("quit", "q", () => {
		closeEditorPane(setPaneWidth);
	});

	useEffect(() => {
		noteIDRef.current = noteID?.toString();
	}, [noteID]);

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
