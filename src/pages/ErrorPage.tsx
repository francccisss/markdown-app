import ErrorPageLayout from "@/components/ErrorPageLayout";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = ({
	redirect,
	code = "Error 404",
	text,
	path = "/",
}: {
	code?: string;
	text?: string;
	redirect?: boolean;
	path?: string;
}) => {
	const navigate = useNavigate();

	useEffect(() => {
		if (redirect) {
			setTimeout(() => {
				navigate(path);
			}, 3000);
		}
	}, []);

	return (
		<ErrorPageLayout>
			<div className="grid place-items-center text-vn-white">
				<h1 className="font-bold  uppercase @[400px]:text-4xl @[600px]:text-4xl">
					<span>{code}</span>
				</h1>
				<p className="@[400px]:text-sm @[600px]:text-lg text-center">
					{text
						? text
						: "Sorry but the content that you are looking for is either not found or is under maintenance, You will be redirected shortly."}
				</p>
			</div>
		</ErrorPageLayout>
	);
};

export default ErrorPage;
