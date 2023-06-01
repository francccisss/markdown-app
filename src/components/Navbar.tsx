import { Link } from "react-router-dom";

const Navbar = ({ sideBarRef }) => {
	function sideBarActivitiy(e: React.MouseEvent): void {
		const sideBar = sideBarRef.current;
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
			className="min-h-[40px] bg-no-repeat flex bg-vn-black px-6 py-2 items-center border-separator-grey-line z-20"
		>
			<div id="left" className="flex ">
				<button
					onClick={sideBarActivitiy}
					className="btn-actions w-[30px] h-[30px] bg-center"
				>
					<svg
						viewBox="0 0 34 34"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M5.61484 8.44H28.2161"
							stroke="#878A8C"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M5.61484 16.9155H28.2161"
							stroke="#878A8C"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M5.61484 25.3909H28.2161"
							stroke="#878A8C"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</button>
			</div>
			<div id="right" className="ml-auto flex items-center">
				<Link
					id="vim-cheatsheet"
					to={"/app/info/vim-shortcuts"}
					className="btn-actions w-[25px] h-[25px] bg-center inline-block mr-5"
				>
					<svg
						viewBox="0 0 34 34"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M0 0H33.9V33.9H0V0Z"
							fill="white"
							fill-opacity="0.01"
						/>
						<path
							d="M7.29699 3.64849C7.29699 2.86839 7.92937 2.23599 8.70949 2.23599H28.4845C29.2646 2.23599 29.897 2.86839 29.897 3.64849V29.0735C29.897 29.8536 29.2646 30.486 28.4845 30.486H8.70949C7.92937 30.486 7.29699 29.8536 7.29699 29.0735V3.64849Z"
							stroke="#878A8C"
							stroke-linejoin="round"
						/>
						<path
							d="M24.247 3.6485V29.0735"
							stroke="#878A8C"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M4.47198 9.29852H10.122"
							stroke="#878A8C"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M4.47198 16.361H10.122"
							stroke="#878A8C"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M4.47198 23.4235H10.122"
							stroke="#878A8C"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M19.3032 2.23599H27.7782"
							stroke="#878A8C"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M19.3032 30.486H27.7782"
							stroke="#878A8C"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</Link>
				<button
					id="note-actions"
					className="btn-actions w-[30px] h-[30px] inline-block"
				>
					<svg
						viewBox="0 0 34 34"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M16.9509 10.5943C18.1211 10.5943 19.0698 9.64568 19.0698 8.47546C19.0698 7.30525 18.1211 6.3566 16.9509 6.3566C15.7807 6.3566 14.8321 7.30525 14.8321 8.47546C14.8321 9.64568 15.7807 10.5943 16.9509 10.5943Z"
							fill="#878A8C"
						/>
						<path
							d="M16.9509 19.0698C18.1211 19.0698 19.0698 18.1211 19.0698 16.9509C19.0698 15.7807 18.1211 14.8321 16.9509 14.8321C15.7807 14.8321 14.8321 15.7807 14.8321 16.9509C14.8321 18.1211 15.7807 19.0698 16.9509 19.0698Z"
							fill="#878A8C"
						/>
						<path
							d="M16.9509 26.839C18.1211 26.839 19.0698 25.8903 19.0698 24.7201C19.0698 23.5499 18.1211 22.6013 16.9509 22.6013C15.7807 22.6013 14.8321 23.5499 14.8321 24.7201C14.8321 25.8903 15.7807 26.839 16.9509 26.839Z"
							fill="#878A8C"
						/>
					</svg>
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
