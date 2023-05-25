import AuthContents from "@/components/AuthContents";
import AuthForm from "@/components/AuthForm";
import { useParams, NavLink, useLoaderData } from "react-router-dom";

const RootAuth = () => {
	const { action } = useLoaderData();
	return (
		<main id="auth" className="page flex bg-vn-blue">
			<section id="left-auth-contents" className="flex-1">
				<AuthContents action={action} />
			</section>
			<section id="auth-form" className="w-1/3">
				<AuthForm action={action} />
			</section>
		</main>
	);
};

export default RootAuth;
