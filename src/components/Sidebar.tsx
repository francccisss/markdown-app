interface ISidebarProps {
	children: React.ReactNode;
}

const Sidebar = ({ children }: ISidebarProps) => {
	return (
		<div
			id="sidebar"
			className="w-96 px-8 py-8 bg-vn-black items-center flex flex-col"
		>
			{children}
		</div>
	);
};

export default Sidebar;
