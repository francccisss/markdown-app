import { db, auth } from "@/utils/contexts/firebaseContext";
import { collection, getDocs, QueryDocumentSnapshot } from "firebase/firestore";

export async function fetchUserNotesLoader(): Promise<
	Array<QueryDocumentSnapshot>
> {
	console.log("call");
	try {
		const userNoteCollectionRef = collection(
			db,
			"users",
			auth.currentUser?.uid as string,
			"notes"
		);
		const userNotes = await getDocs(userNoteCollectionRef);
		console.log(userNotes.docs);
		return userNotes.docs;
	} catch (err) {
		console.log(err);
		return [];
	}
}
