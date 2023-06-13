import { db, auth } from "@/utils/contexts/firebaseContext";
import {
	collection,
	DocumentData,
	getDocs,
	QueryDocumentSnapshot,
} from "firebase/firestore";

export async function fetchUserNotesLoader(): Promise<Array<DocumentData>> {
	console.log("called");
	try {
		const userNoteCollectionRef = collection(
			db,
			"users",
			auth.currentUser?.uid as string,
			"notes"
		);
		const userNotes = await getDocs(userNoteCollectionRef);
		const mapNoteDocument = userNotes.docs.map((doc) => {
			const convertDateFormat = new Date(doc.data().dateAdded.nanoseconds);
			return { ...doc.data(), dateAdded: convertDateFormat };
		});
		return mapNoteDocument;
	} catch (err) {
		console.log(err);
		return [];
	}
}
