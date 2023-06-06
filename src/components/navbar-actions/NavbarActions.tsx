const NavbarActions = () => {
	const actions = {
		info: "Note info",
		save: "Save note",
		removeNote: "Remove note",
	};

	const mapActions = Object.values(actions).map((action) => {
		return (
			<li key={action} className="block border-b-vn-dshade-white border-b">
				<button className="px-2 w-full text-left " key={action}>
					{action}
				</button>
			</li>
		);
	});

	return (
		<div
			id="navbar-actions"
			className="absolute right-4 z-0 top-[50px] text-vn-white rounded border-vn-blue border-2"
		>
			<ul className="py-2">{mapActions}</ul>
		</div>
	);
};

export default NavbarActions;
