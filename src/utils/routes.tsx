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
		children: [
			{
				path: ":noteID",
			},
		],
	},
]);
