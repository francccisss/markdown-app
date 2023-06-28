import ErrorPageLayout from "@/components/ErrorPageLayout";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = ({
	redirect,
	code = "404",
	text,
}: {
	code?: string;
	text?: string;
	redirect?: boolean;
}) => {
	const navigate = useNavigate();

	useEffect(() => {
		if (redirect) {
			setTimeout(() => {
				navigate("/");
			}, 3000);
		}
	}, []);

	return (
		<ErrorPageLayout>
			<div className="grid place-items-center text-vn-white">
				<h1 className="font-bold text-6xl uppercase">
					Error <span>{code}</span>
				</h1>
				<p className="text-lg">
					{text
						? text
						: "Sorry but the content that you are looking for is either not found or is under maintenance, please come again later."}
				</p>
			</div>
		</ErrorPageLayout>
	);
};

export default ErrorPage;
