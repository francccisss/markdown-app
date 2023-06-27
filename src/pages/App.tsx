import LoadingScreen from "@/components/LoadingScreen";
import MainContents from "@/components/MainContents";
import { fetchUserNotesLoader } from "@/loader/fetchUserNotes";
import { auth } from "@/utils/contexts/firebaseContext";
import { INote } from "@/utils/types/Note";
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

const App = () => {
	const [notes, setNotes] = useState<INote[]>([]);
	const [loading, setLoading] = useState(true);

	async function getFetchedNotes(): Promise<void> {
		try {
			const fetchedNotes = (await fetchUserNotesLoader()) as INote[];
			setNotes([...fetchedNotes]);
			return;
		} catch (err) {
			console.log(err);
			return;
		}
	}

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				getFetchedNotes().then(() => {
					setLoading(false);
				});
				return;
			}
		});
	}, []);

	return (
		<>
			{!loading ? <MainContents fetchedNotes={notes} /> : <LoadingScreen />}
		</>
	);
};

export default App;
