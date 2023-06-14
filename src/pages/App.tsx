import LoadingScreen from "@/components/LoadingScreen";
import MainContents from "@/components/MainContents";
import { fetchUserNotesLoader } from "@/loader/fetchUserNotes";
import { auth } from "@/utils/contexts/firebaseContext";
import { INote } from "@/utils/types/Note";
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
export interface IContextType {
	notes: INote[];
	setNotes: (prev: Array<INote>) => void;
	noteIDRef: { current: undefined | string };
	writeNote: () => Promise<void>;
}

export interface INavbarActions {
	[k: string]: (e: React.MouseEvent) => Promise<void>;
}

export const NavbarActionsContext = createContext<INavbarActions>(
	null as unknown as INavbarActions
);
const App = () => {
	const [notes, setNotes] = useState<INote[]>([]);

	async function getFetchedNotes(): Promise<void> {
		try {
			const fetchedNotes = (await fetchUserNotesLoader()) as INote[];
			console.log(fetchedNotes);
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
				getFetchedNotes();
				return;
			}
		});
	}, []);

	return (
		<>
			{notes.length !== 0 ? (
				<MainContents fetchedNotes={notes} />
			) : (
				<LoadingScreen />
			)}
		</>
	);
};

export default App;
