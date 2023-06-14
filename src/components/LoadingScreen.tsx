const LoadingScreen = () => {
	return (
		<div
			id="loading-screen"
			className="bg-vn-black text-vn-white h-screen flex"
		>
			<div className="flex-1 flex items-center justify-center">
				<span id="loading-spinner" className="loading-spinner"></span>
			</div>
		</div>
	);
};
export default LoadingScreen;
