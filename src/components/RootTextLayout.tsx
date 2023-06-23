const RootTextLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div
			id="root-texts"
			className="drop-shadow-2xl box-content p-10 bg-vn-black z-10 auth-text-container text-[#ffffff] max-w-full max-h-[300px] rounded inline-block border-b-8 border-b-vn-blue "
		>
			{children}
		</div>
	);
};

export default RootTextLayout;
