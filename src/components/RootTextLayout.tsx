const RootTextLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div
			id="root-texts"
			className="drop-shadow-2xl p-10 bg-vn-black z-10 auth-text-container text-[#ffffff] w-full rounded inline-block border-b-8 border-b-vn-blue "
		>
			{children}
		</div>
	);
};

export default RootTextLayout;
