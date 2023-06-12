import { EmptyNotes } from "@/components/EmptyNotes";
import VimnoteCheatSheet from "@/components/VimnoteCheatSheet";
import Note from "@/components/note/Note";
import App from "@/pages/App";
import RootAuth from "@/pages/RootAuth";
import { NavLink, createBrowserRouter } from "react-router-dom";
import SignIn from "@/components/auth/SignIn";
import SignUp from "@/components/auth/SignUp";
import { fetchUserNotesLoader } from "@/loader/fetchUserNotes";

export const ROUTES = createBrowserRouter([
	{
		path: "/",
		element: <RootAuth />,
		children: [
			{
				path: "sign-up",
				element: <SignUp />,
			},
			{
				path: "sign-in",
				element: <SignIn />,
			},
		],
	},
	{
		path: "/app",
		element: <App />,
		// loader: fetchUserNotesLoader,
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
