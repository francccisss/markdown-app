import { NavLink } from "react-router-dom";

const SideMenu = ({ sideBarRef }) => {
	const actionsStyle = `side-menut-actions w-[22px] h-[22px] p-2 inline-block box-content bg-center transition-all duration-150 ease-in-out
     hover:bg-vn-dshade-white3 rounded-sm`;

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
		<div className="h-full py-3 flex gap-3 flex-col justify-start items-center text-vn-dshade-white w-10 z-20 border-l-0 bg-vn-black border-[3px] border-vn-dshade-white2 ">
			<button onClick={sideBarActivitiy} className={actionsStyle}>
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

			<NavLink
				id="vim-cheatsheet"
				to={"/app/info/vim-shortcuts"}
				className={actionsStyle}
			>
				<svg
					viewBox="0 0 34 34"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M5.64999 4.23751C5.64999 3.45741 6.28239 2.82501 7.06249 2.82501H21.1875L28.25 9.88751V29.6625C28.25 30.4426 27.6176 31.075 26.8375 31.075H7.06249C6.28239 31.075 5.64999 30.4426 5.64999 29.6625V4.23751Z"
						stroke="#878A8C"
						strokeWidth="2"
						strokeLinecap="round"
					/>
					<path
						d="M11.3 14.125H22.6"
						stroke="#878A8C"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M11.3 19.775H22.6"
						stroke="#878A8C"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</NavLink>
		</div>
	);
};

export default SideMenu;
