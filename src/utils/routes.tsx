import { EmptyNotes } from "@/components/EmptyNotes";
import VimnoteCheatSheet from "@/components/VimnoteCheatSheet";
import Note from "@/components/note/Note";
import App from "@/pages/App";
import RootAuth from "@/pages/RootAuth";
import { createBrowserRouter } from "react-router-dom";
import SignIn from "@/components/auth/SignIn";
import SignUp from "@/components/auth/SignUp";
import ErrorPage from "@/pages/ErrorPage";

export const ROUTES = createBrowserRouter([
	{
		path: "/",
		element: <RootAuth />,
		errorElement: <ErrorPage code="404" />,
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
		errorElement: <ErrorPage code="404" />,
		element: <App />,
		shouldRevalidate: () => false,
		children: [
			{
				path: ":noteID",
				errorElement: (
					<ErrorPage code="404" text="Unable to resolve user note" />
				),
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
