const Sidebar = ({ children }: React.ReactElement) => {
	return (
		<div
			id="sidebar"
			className="w-96 px-4 bg-vn-black items-center flex flex-col"
		>
			{children}
		</div>
	);
};

export default Sidebar;
