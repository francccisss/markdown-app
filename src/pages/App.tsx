import MainContents from "@/components/MainContents";
import { auth } from "@/utils/contexts/firebaseContext";
import { INote } from "@/utils/types/Note";
import { onAuthStateChanged } from "firebase/auth";
import { createContext } from "react";
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
	return <MainContents />;
};

export default App;
