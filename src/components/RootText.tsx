import RootTextLayout from "./RootTextLayout";

const RootText = ({ title, para }: { title: string; para: string }) => {
	return (
		<RootTextLayout>
			<h2 className="font-bold text-lg">{title}</h2>
			{para == "" ? null : <p className="">{para}</p>}
		</RootTextLayout>
	);
};

export default RootText;
