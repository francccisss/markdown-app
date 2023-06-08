import { EmptyNotes } from "@/components/EmptyNotes";
import VimnoteCheatSheet from "@/components/VimnoteCheatSheet";
import Note from "@/components/note/Note";
import App from "@/pages/App";
import RootAuth from "@/pages/RootAuth";
import { NavLink, createBrowserRouter } from "react-router-dom";
import SignIn from "@/pages/SignIn";
import SignUp from "@/pages/SignUp";
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
		children: [
			{
				path: "sign-up",
				element: <SignUp />,
				loader: (): { action: string } => {
					return { action: "/sign-up" };
				},
			},
			{
				path: "sign-in",
				element: <SignIn />,
				loader: (): { action: string } => {
					return { action: "/sign-in" };
				},
			},
		],
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
