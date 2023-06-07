import React from "react";

const NavbarActions = () => {
	// separate actions
	const actions = {
		info: {
			title: "Note Information",
			onClick: (e: React.MouseEvent) => {
				console.log("info clicked");
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
		},
	};

	// same as vimnoteCheatSheet
	const mapActions = Object.values(actions).map((action) => {
		return (
			<li key={action.title} className="border-b-vn-dshade-white block">
				<button
					onClick={action.onClick}
					className="px-2 py-3 transition-all duration-100 ease-in-out hover:bg-vn-dshade-white3 w-full text-left "
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
			className="absolute right-4 z-0 top-[50px] text-[.9rem] text-vn-white bg-vn-black shadow-lg rounded border-vn-dshade-white border-2"
		>
			<ul className="w-52">{mapActions}</ul>
		</div>
	);
};

export default NavbarActions;
