import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import Editor from "../editor/Editor";
import Preview from "../preview/Preview";
import { useCallback, useEffect, useState } from "react";
import "./note.scss";
import { INote } from "@/utils/types/Note";
import { Vim } from "@replit/codemirror-vim";
import NoteInfoModal from "../NoteInfoModal";
import { IMainContentsContextType } from "@/utils/types/MainContentsContextProp";

const Note = () => {
	const { noteID } = useParams();
	const navigate = useNavigate();
	const {
		editorActive,
		isSaving,
		notes,
		setNotes,
		noteIDRef,
		writeNote,
		noteModalActive,
	} = useOutletContext() as IMainContentsContextType;
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

	Vim.defineEx("write", "w", writeNote);
	Vim.defineEx("help", "h", () => navigate("/app/vim-cheatsheet"));

	useEffect(() => {
		noteIDRef.current = noteID?.toString();
	}, [noteID]);

	useEffect(() => {
		console.log(editorActive);
	}, [editorActive]);

	return (
		<section
			id="note"
			className="flex flex-1  bg-vn-dshade-black relative text-vn-white w-full "
		>
			{noteModalActive && <NoteInfoModal note={currentNote} />}
			{!editorActive ? (
				<Editor
					input={currentNote.contents}
					onChange={handleEditorOnChange}
				/>
			) : (
				// <input autoFocus={true} />
				<Preview markdownInput={currentNote.contents} />
			)}
			{isSaving ? (
				<span
					id="loading-spinner"
					className="loading-spinner  w-[30px] h-[30px] absolute right-0 m-8 z-50 border-vn-black border-[6px] border-b-vn-blue"
				/>
			) : null}
		</section>
	);
};

export default Note;
