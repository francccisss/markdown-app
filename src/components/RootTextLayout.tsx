const RootTextLayout = ({
	children,
	top = "0",
	left = "2.5rem",
	bottom,
	right,
}: {
	children: React.ReactNode;
	top?: string;
	left?: string;
	right?: string;
	bottom?: string;
}) => {
	return (
		<div
			id="root-texts"
			className="drop-shadow-xl mr-10 p-12 bg-vn-black z-10 auth-text-container text-vn-white w-fit rounded-lg inline-block "
			style={{
				top,
				left,
				right,
				bottom,
			}}
		>
			{children}
		</div>
	);
};

export default RootTextLayout;
