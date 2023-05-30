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
			className="min-h-[40px] bg-no-repeat flex bg-vn-black px-6 py-2 border-b-[1px] items-center border-separator-grey-line"
		>
			<div id="left" className="flex ">
				<button
					onClick={sideBarActivitiy}
					className="btn-actions w-[30px] h-[30px] bg-center"
				>
					<svg
						// width="34"
						// height="34"
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
			<div id="right" className="ml-auto flex">
				<Link
					to={"/app/info/vim-shortcuts"}
					className="btn-actions w-[28px] h-[28px] bg-center inline-block mr-5"
				>
					<svg
						// width="28"
						// height="28"
						viewBox="0 0 28 28"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M13.2953 18.2293C13.2953 18.4162 13.3696 18.5954 13.5017 18.7276C13.6339 18.8597 13.8131 18.9339 14 18.9339C14.1869 18.9339 14.3661 18.8597 14.4982 18.7276C14.6304 18.5954 14.7046 18.4162 14.7046 18.2293V12.5653C14.7046 12.3784 14.6304 12.1992 14.4982 12.067C14.3661 11.9349 14.1869 11.8607 14 11.8607C13.8131 11.8607 13.6339 11.9349 13.5017 12.067C13.3696 12.1992 13.2953 12.3784 13.2953 12.5653V18.2293Z"
							fill="#878A8C"
						/>
						<path
							d="M14 10.4767C14.3891 10.4767 14.7046 10.1613 14.7046 9.77209C14.7046 9.38293 14.3891 9.06744 14 9.06744C13.6108 9.06744 13.2953 9.38293 13.2953 9.77209C13.2953 10.1613 13.6108 10.4767 14 10.4767Z"
							fill="#878A8C"
						/>
						<path
							d="M14 0C16.7689 1.4029e-08 19.4756 0.82105 21.7778 2.35933C24.0801 3.8976 25.8745 6.08402 26.9342 8.64211C27.9938 11.2002 28.2712 14.015 27.7311 16.7307C27.191 19.4464 25.8578 21.941 23.9 23.899C21.9422 25.857 19.4478 27.1905 16.7321 27.7308C14.0165 28.2712 11.2016 27.9941 8.64341 26.9347C6.08522 25.8753 3.89862 24.0811 2.36011 21.779C0.821601 19.4769 0.000278727 16.7703 0 14.0014C0.00373028 10.2894 1.47988 6.73046 4.10454 4.10554C6.7292 1.48061 10.288 0.00410393 14 0ZM14 26.5893C16.4903 26.5893 18.9247 25.8508 20.9953 24.4672C23.0659 23.0836 24.6797 21.117 25.6326 18.8162C26.5854 16.5154 26.8346 13.9837 26.3486 11.5412C25.8625 9.0988 24.6631 6.85535 22.902 5.09462C21.1408 3.3339 18.8971 2.13497 16.4546 1.64947C14.0121 1.16398 11.4804 1.41372 9.17979 2.36711C6.87919 3.3205 4.91299 4.93472 3.52985 7.00562C2.1467 9.07652 1.40874 11.5111 1.4093 14.0014C1.41378 17.339 2.74182 20.5386 5.10215 22.8984C7.46247 25.2582 10.6624 26.5856 14 26.5893Z"
							fill="#878A8C"
						/>
					</svg>
				</Link>
				<button className="btn-actions w-[30px] h-[30px] inline-block">
					<svg
						// width="34"
						// height="34"
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
