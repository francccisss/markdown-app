const RootTextLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div
			id="root-texts"
			className="drop-shadow-2xl p-12 bg-vn-black z-10 auth-text-container text-vn-white w-fit rounded-lg inline-block basis-auto "
		>
			{children}
		</div>
	);
};

export default RootTextLayout;
