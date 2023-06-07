import React from "react";

interface IActionProps {
	[key: string]: {
		title: string;
		onClick: (e: React.MouseEvent) => void;
		bgColor?: string;
		textColor?: string;
	};
}

const NavbarActions = () => {
	// separate actions
	const actions: IActionProps = {
		info: {
			title: "Note Information",
			onClick: (e: React.MouseEvent) => {
				console.log("info clicked");
			},
		},
		openEditor: {
			title: "Open Editor",
			onClick: (e: React.MouseEvent) => {
				console.log("open editor clicked");
			},
		},
		closeEditor: {
			title: "Close Editor",
			onClick: (e: React.MouseEvent) => {
				console.log("close editor clicked");
			},
		},
		save: {
			title: "Save Note",
			onClick: (e: React.MouseEvent) => {
				console.log("save clicked");
			},
		},
		remove: {
			title: "Remove Note",
			onClick: (e: React.MouseEvent) => {
				console.log("remove clicked");
			},
			bgColor: "",
			textColor: "text-vn-red",
		},
	};

	// same as vimnoteCheatSheet
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
			className="w-60 absolute right-4 z-0 top-[50px] text-[.9rem] text-vn-white bg-vn-black shadow-lg rounded border-vn-dshade-white border-2"
		>
			<ul className="w-full">{mapActions}</ul>
		</div>
	);
};

export default NavbarActions;
