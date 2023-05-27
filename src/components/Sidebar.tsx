interface ISidebarProps {
	children: React.ReactNode;
}

const Sidebar = ({ children }: ISidebarProps) => {
	return (
		<div
			id="sidebar"
			className="w-96 py-8 bg-vn-black flex flex-col h-screen"
		>
			{children}
		</div>
	);
};

export default Sidebar;
