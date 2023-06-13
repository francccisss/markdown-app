import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { INote } from "./types/Note";
import { auth, db } from "./contexts/firebaseContext";

export async function writeNote(currentNote: INote): Promise<void> {
	console.log(currentNote?.contents);
	try {
		if (auth.currentUser) {
			const noteDocRef = doc(
				db,
				"users",
				auth.currentUser?.uid,
				"notes",
				currentNote.id
			);
			const updateNote = await updateDoc(noteDocRef, {
				contents: currentNote.contents,
			});
			console.log(`current note is saved: ${currentNote.id}`);
		}
	} catch (err) {
		console.log(err);
		throw err;
	}
}

export function closeEditorPane(
	widthSetter: React.Dispatch<React.SetStateAction<number>>
): void {
	widthSetter(0);
}
