import { NavbarActionsContext } from "@/pages/App";
import React, { useContext } from "react";

interface IActionProps {
	[key: string]: {
		title: string;
		onClick: (e: React.MouseEvent) => void | Promise<void>;
		bgColor?: string;
		textColor?: string;
	};
}

const NavbarActions = () => {
	const { deleteNote, writeNote } = useContext(NavbarActionsContext);
	const actions: IActionProps = {
		info: {
			title: "Note Information",
			onClick: (e: React.MouseEvent) => {
				console.log("info clicked");
			},
		},
		// openEditor: {
		// 	title: "Open Editor",
		// 	onClick: (e: React.MouseEvent) => {
		// 		console.log("open editor clicked");
		// 	},
		// },
		// closeEditor: {
		// 	title: "Close Editor",
		// 	onClick: (e: React.MouseEvent) => {
		// 		console.log("close editor clicked");
		// 	},
		// },
		save: {
			title: "Save Note",
			onClick: writeNote,
		},
		remove: {
			title: "Remove Note",
			onClick: deleteNote,
			bgColor: "",
			textColor: "text-vn-red",
		},
	};

	const mapActions = Object.values(actions).map((action) => {
		return (
			<li key={action.title} className="border-b-vn-dshade-white block">
				<button
					onClick={action.onClick}
					className={`px-2 py-3 transition-all duration-100 ease-in-out font-medium hover:bg-vn-dshade-white3 hover:text-vn-white w-full text-left 
					${action.textColor !== undefined && action.textColor + " " + "font-semibold"}`}
					key={action.title}
				>
					{action.title}
				</button>
			</li>
		);
	});

	return (
		<div
			id="navbar-actions"
			className="w-60 absolute right-4 z-0 top-[50px] text-[.9rem] text-vn-white bg-vn-black shadow-xl rounded-sm border-vn-dshade-white border"
		>
			<ul className="w-full">{mapActions}</ul>
		</div>
	);
};

export default NavbarActions;
