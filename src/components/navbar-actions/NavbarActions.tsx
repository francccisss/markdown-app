const NavbarActions = () => {
	const actions = {
		info: "info",
		removeNote: "removeNote",
	};

	const mapActions = Object.values(actions).map((action) => {
		return (
			<li key={action}>
				<button key={action}>{action}</button>
			</li>
		);
	});

	return (
		<div id="navbar-actions">
			<ul>{mapActions}</ul>
		</div>
	);
};

export default NavbarActions;
