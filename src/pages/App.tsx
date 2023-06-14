import LoadingScreen from "@/components/LoadingScreen";
import MainContents from "@/components/MainContents";
import { fetchUserNotesLoader } from "@/loader/fetchUserNotes";
import { auth } from "@/utils/contexts/firebaseContext";
import { INote } from "@/utils/types/Note";
import { onAuthStateChanged } from "firebase/auth";
import { useScroll } from "framer-motion";
import { createContext, useEffect, useMemo, useState } from "react";
export interface IContextType {
	notes: Array<INote>;
	setNotes: (prev: Array<INote>) => void;
	noteIDRef: { current: undefined | string };
}

export const NoteContext = createContext<IContextType>(
	null as unknown as IContextType
);
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
