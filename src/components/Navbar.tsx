const Navbar = () => {
	return (
		<nav
			id="navbar"
			className="h-12 flex bg-vn-black px-4 border-b-[2px] border-separator-grey-line"
		>
			<div id="left">
				<span className="bg-nav-sb-icon bg-contain w-6 h-6 bg-center"></span>
			</div>
			<div id="right" className="ml-auto">
				<span></span>
				<span></span>
			</div>
		</nav>
	);
};

export default Navbar;
