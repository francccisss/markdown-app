import { auth, db } from "@/App";
import { INote } from "@/utils/types/Note";
import { collection, getDocs } from "firebase/firestore";

export async function fetchUserNotesLoader(): Promise<INote[]> {
	try {
		const userNoteCollectionRef = collection(
			db,
			"users",
			auth.currentUser?.uid as string,
			"notes"
		);
		const userNotes = await getDocs(userNoteCollectionRef);
		userNotes.docs.forEach((doc) => {
			console.log(doc.data());
		});
		return [];
	} catch (err) {
		console.log(err);
		return [];
	}
}
