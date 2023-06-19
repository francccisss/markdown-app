import RootTextLayout from "./RootTextLayout";

const RootText = ({ title, para }: { title: string; para: string }) => {
	return (
		<RootTextLayout>
			<div className="font-bold text-lg">{title}</div>
			{para == "" ? null : <p className="max-w-[600px]">{para}</p>}
		</RootTextLayout>
	);
};

export default RootText;
