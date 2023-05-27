import { Link } from "react-router-dom";

const Navbar = ({ sideBarRef }) => {
	function sideBarActivitiy(e: React.MouseEvent): void {
		const sideBar = sideBarRef.current;
		const sideBarBtn = e.target;
		if (sideBar.classList.contains("sidebar-active")) {
			sideBar.classList.replace("sidebar-active", "sidebar-inactive");
		} else {
			sideBar.classList.replace("sidebar-inactive", "sidebar-active");
		}
		console.log(sideBar.classList);
	}

	return (
		<nav
			id="navbar"
			className="min-h-[40px] bg-no-repeat flex bg-vn-black px-6 py-2 border-b-[2px] items-center border-separator-grey-line"
		>
			<div id="left" className="flex ">
				<button
					onClick={sideBarActivitiy}
					className="bg-nav-sb-icon bg-cover bg-no-repeat w-6 h-6 bg-center"
				/>
			</div>
			<div id="right" className="ml-auto flex">
				<Link
					to={"/app/info/vim-shortcuts"}
					className="bg-nav-info-icon bg-cover bg-no-repeat w-6 h-6 bg-center inline-block mr-5"
				/>
				<button className="bg-nav-more-icon bg-cover bg-no-repeat w-6 h-6 bg-center inline-block" />
			</div>
		</nav>
	);
};

export default Navbar;
