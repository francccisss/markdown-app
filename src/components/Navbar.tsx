import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav
			id="navbar"
			className="h-12 flex bg-vn-black px-4 border-b-[2px] items-center border-separator-grey-line"
		>
			<div id="left" className="flex items-center">
				<button className="bg-nav-sb-icon bg-contain w-6 h-6 bg-center " />
			</div>
			<div id="right" className="ml-auto flex">
				<Link className="bg-nav-info-icon bg-contain w-6 h-6 bg-center inline-block mr-5"></Link>
				<Link className="bg-nav-more-icon bg-contain w-6 h-6 bg-center inline-block"></Link>
			</div>
		</nav>
	);
};

export default Navbar;
