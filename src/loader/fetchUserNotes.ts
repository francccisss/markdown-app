import { auth, db } from "@/App";
import { INote } from "@/utils/types/Note";
import {
	collection,
	getDocs,
	QuerySnapshot,
	DocumentData,
	QueryDocumentSnapshot,
} from "firebase/firestore";

export async function fetchUserNotesLoader(): Promise<
	Array<QueryDocumentSnapshot>
> {
	try {
		const userNoteCollectionRef = collection(
			db,
			"users",
			auth.currentUser?.uid as string,
			"notes"
		);
		const userNotes = await getDocs(userNoteCollectionRef);
		return userNotes.docs;
	} catch (err) {
		console.log(err);
		return [];
	}
}
