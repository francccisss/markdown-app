import Note from "@/components/note/Note";
import App from "@/pages/App";
import RootAuth from "@/pages/RootAuth";
import { NavLink, createBrowserRouter } from "react-router-dom";

export const ROUTES = createBrowserRouter([
	{
		path: "/",
		element: <RootAuth />,
		loader: () => {
			return { action: "/" };
		},
	},
	{
		path: "/sign-up",
		element: <RootAuth />,
		loader: () => {
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
				path: "no-note",
				element: <h1>no notes</h1>,
			},
		],
	},
]);
