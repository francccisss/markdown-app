const SplashScreenLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div
			id="splash-screen"
			className="bg-[#22232680]  text-vn-white h-screen w-full flex-1 flex absolute z-[100] "
		>
			<div className="flex-1 flex items-center justify-center">
				{children}
			</div>
		</div>
	);
};
export default SplashScreenLayout;
