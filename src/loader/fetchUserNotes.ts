import { Auth } from "firebase/auth";
import {
	collection,
	Firestore,
	getDocs,
	QueryDocumentSnapshot,
} from "firebase/firestore";

export async function fetchUserNotesLoader(
	auth: Auth,
	db: Firestore
): Promise<Array<QueryDocumentSnapshot>> {
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
