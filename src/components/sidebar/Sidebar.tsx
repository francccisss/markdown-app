import { MutableRefObject } from "react";
import "./sidebar.scss";
interface ISidebarProps {
	children: React.ReactNode;
	sideBarRef: any;
}

const Sidebar = ({ children, sideBarRef }: ISidebarProps) => {
	return (
		<div
			id="sidebar"
			ref={sideBarRef}
			className="sidebar-inactive z-10 bg-vn-black flex flex-col max-[720px]:absolute max-[720px]:left-10 h-full "
		>
			{children}
		</div>
	);
};

export default Sidebar;
