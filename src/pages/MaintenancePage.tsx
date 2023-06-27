import ErrorPageLayout from "@/components/ErrorPageLayout";

const MaintenancePage = () => {
	return (
		<ErrorPageLayout>
			<div className="grid place-items-center text-vn-white">
				<h1 className="font-bold text-6xl uppercase">
					Error <span>404</span>
				</h1>
				<p className="text-lg">
					Sorry but the content that you are looking for is either not
					found or is under maintenance, please come again later.
				</p>
			</div>
		</ErrorPageLayout>
	);
};

export default MaintenancePage;
