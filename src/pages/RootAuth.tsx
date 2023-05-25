import AuthContents from "@/components/AuthContents";
import AuthForm from "@/components/AuthForm";
import { useParams, NavLink, useLoaderData } from "react-router-dom";

const RootAuth = () => {
	const { action } = useLoaderData();
	return (
		<main id="auth" className="page flex bg-[#ffffff] h-screen">
			<section id="left-auth-contents" className="flex-1 w-full">
				<AuthContents action={action} />
			</section>
			<section id="auth-form" className="w-[40%] bg-vn-black">
				<AuthForm action={action} />
			</section>
		</main>
	);
};

export default RootAuth;
