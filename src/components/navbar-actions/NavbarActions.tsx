const NavbarActions = () => {
	// separate actions
	const actions = {
		info: "Note info",
		save: "Save note",
		removeNote: "Remove note",
	};

	// same as vimnoteCheatSheet
	const mapActions = Object.values(actions).map((action) => {
		return (
			<li key={action} className="border-b-vn-dshade-white block">
				<button
					className="px-2 py-3 transition-all duration-100 ease-in-out hover:bg-vn-dshade-white3 w-full text-left "
					key={action}
				>
					{action}
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
