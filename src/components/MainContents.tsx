import Navbar from "@/components/Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import NoteItem from "@/components/NoteItem";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import SidebarActions from "@/components/SidebarActions";
import Sidebar from "@/components/sidebar/Sidebar";
import { uid } from "uid";
import { INote } from "@/utils/types/Note";
import SideMenu from "@/components/SideMenu";
import { FirebaseContext } from "@/utils/contexts/firebaseContext";
import { doc, deleteDoc, updateDoc, setDoc } from "firebase/firestore";
import { NavbarActionsContext } from "@/utils/contexts/navbarActionsContext";

const MainContents = ({ fetchedNotes }: { fetchedNotes: INote[] }) => {
	const navigate = useNavigate();
	const previousNoteContents = useRef<undefined | string>();
	const { auth, db } = useContext(FirebaseContext);
	const noteIDRef = useRef(undefined);
	const [searchInput, setSearchInput] = useState<string>("");
	const sideBarRef = useRef<HTMLDivElement>();
	const [notes, setNotes] = useState<INote[]>(fetchedNotes);
	const [noteModalActive, setNoteModalActive] = useState(false);
	const [navBarActionsActive, setNavbarActionsActive] = useState(false);
	const [searchedNotes, setSearchedNotes] = useState(notes);
	const [activeLogoutModal, setActiveLogoutModal] = useState(false);
	const [isSaving, setIsSaving] = useState(false);

	function handleSearchInput(e: React.ChangeEvent<HTMLInputElement>): void {
		console.log(e.target.value);
		setSearchInput(e.target.value);
	}

	const searchQuery = useCallback(
		(input: string, notesArr: Array<INote>) => {
			if (input !== "") {
				const filterNotes = notesArr.filter((note) =>
					note.contents.includes(input)
				);
				return setSearchedNotes(filterNotes);
			}
			return setSearchedNotes(searchedNotes);
		},
		[notes]
	);

	function infoModal(e: React.MouseEvent): void {
		e.stopPropagation();
		console.log("clicked");
		console.log(noteModalActive);
		setNoteModalActive(true);
	}

	async function addNote(): Promise<void> {
		const newID = uid(16).toString();
		const newNote: INote = {
			id: newID,
			authorID: auth.currentUser?.uid,
			dateAdded: new Date(),
			lastUpdated: new Date(),
			contents: "",
		};
		try {
			const newNoteDocRef = doc(
				db,
				"users",
				auth.currentUser?.uid as string,
				"notes",
				newID
			);
			setNotes((prev) => [newNote, ...prev]);
			await setDoc(newNoteDocRef, newNote);
			console.log(newNote);
		} catch (err) {
			console.log("unable to add note ");
			throw err;
		}
	}

	async function deleteNote(e: React.MouseEvent): Promise<void> {
		const noteRef = notes.find(
			(note) => note.id === noteIDRef.current
		) as INote;
		console.log(noteRef);
		try {
			if (auth.currentUser) {
				const noteDocumentRef = doc(
					db,
					"users",
					auth.currentUser.uid,
					"notes",
					noteRef.id
				);
				const filterNotes = notes.filter((note) => note.id !== noteRef.id);
				setNotes(filterNotes);
				await deleteDoc(noteDocumentRef);
			} else {
				console.log("Unauthorize access to user notes");
			}
		} catch (err) {
			console.log(err);
			console.log("unable to delete note document:" + noteRef.id);
		}
	}

	async function writeNote(): Promise<void> {
		const noteRef = notes.find(
			(note) => note.id === noteIDRef.current
		) as INote;
		// saving the previous contents from last save, and checking the current contents of a note
		// if they are the same with the old contents so that we users dont push the same contents
		// to save write cost on database
		if (previousNoteContents.current !== noteRef.contents) {
			previousNoteContents.current = noteRef.contents;
			try {
				setIsSaving(true);
				if (auth.currentUser) {
					const noteDocRef = doc(
						db,
						"users",
						auth.currentUser?.uid,
						"notes",
						noteRef.id
					);
					const updateNote = await updateDoc(noteDocRef, {
						contents: noteRef.contents,
						lastUpdated: new Date(),
					});
					console.log(`current note is saved: ${noteRef.id}`);
					setIsSaving(false);
					return;
				}
			} catch (err) {
				console.log(err);
				throw err;
			}
		}
		console.log("the same");
	}

	async function redirectToExistingNotes(): Promise<void> {
		if (notes.length !== 0) {
			return navigate(`/app/${notes[0].id}`);
		}
		return navigate("/app/empty-notes");
	}
	useEffect(() => {
		searchQuery(searchInput, notes);
	}, [searchInput]);

	useEffect(() => {
		setSearchedNotes(notes);
		redirectToExistingNotes();
	}, [notes]);

	return (
		<main
			onClick={(e) => {
				setNavbarActionsActive(false);
				setNoteModalActive(false);
				setActiveLogoutModal(false);
			}}
			id="app-page"
			className=" h-screen w-screen flex flex-col relative "
		>
			<NavbarActionsContext.Provider
				value={{ deleteNote, writeNote, infoModal }}
			>
				<Navbar
					navActionSetter={setNavbarActionsActive}
					navActionState={navBarActionsActive}
				/>
			</NavbarActionsContext.Provider>
			<section id="content-section" className="flex-1 flex h-[0%]">
				<SideMenu
					sideBarRef={sideBarRef}
					activeModal={activeLogoutModal}
					setActiveModal={setActiveLogoutModal}
				/>
				<Sidebar sideBarRef={sideBarRef}>
					<SidebarActions
						searchInput={searchInput}
						handleInput={handleSearchInput}
						addNote={addNote}
					/>
					<ul id="notes-list" className="h-full w-full ">
						{notes.length !== 0 ? (
							searchedNotes.map((note) => {
								return <NoteItem key={note.id} note={note} />;
							})
						) : (
							<p className="text-center mt-6 text-sm text-vn-dshade-white">
								You don't have any notes, click on the '+' icon.{" "}
							</p>
						)}
					</ul>
				</Sidebar>
				<Outlet
					context={{
						isSaving,
						notes,
						setNotes,
						noteIDRef,
						writeNote,
						noteModalActive,
					}}
				/>
			</section>
		</main>
	);
};

export default MainContents;
