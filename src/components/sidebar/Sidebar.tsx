import { MutableRefObject } from "react";
import "./sidebar.scss";
interface ISidebarProps {
	children: React.ReactNode;
	sideBarRef: MutableRefObject<HTMLDivElement>;
}

const Sidebar = ({ children, sideBarRef }: ISidebarProps) => {
	return (
		<div
			id="sidebar"
			ref={sideBarRef}
			className="sidebar-inactive bg-vn-black flex flex-col"
		>
			{children}
		</div>
	);
};

export default Sidebar;
