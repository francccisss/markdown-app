import { EmptyNotes } from "@/components/EmptyNotes";
import VimnoteCheatSheet from "@/components/VimnoteCheatSheet";
import Note from "@/components/note/Note";
import App from "@/pages/App";
import RootAuth from "@/pages/RootAuth";
import { NavLink, createBrowserRouter } from "react-router-dom";

interface ILoaderProp {
	loader: () => { action: string };
}
export const ROUTES = createBrowserRouter([
	{
		path: "/",
		element: <RootAuth />,
		loader: (): { action: string } => {
			return { action: "/" };
		},
	},
	{
		path: "/sign-up",
		element: <RootAuth />,
		loader: (): { action: string } => {
			return { action: "/sign-up" };
		},
	},
	{
		path: "/app",
		element: <App />,
		children: [
			{
				path: ":noteID",
				element: <Note />,
			},
			{
				path: "empty-notes",
				element: <EmptyNotes />,
			},
			{
				path: "vim-cheatsheet",
				element: <VimnoteCheatSheet />,
			},
		],
	},
]);
