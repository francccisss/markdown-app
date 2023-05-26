import AuthContents from "@/components/AuthContents";
import AuthForm from "@/components/AuthForm";
import { useParams, NavLink, useLoaderData } from "react-router-dom";

const RootAuth = () => {
	const { action } = useLoaderData();

	return (
		<main id="auth" className="page flex bg-[#ffffff] h-screen min-w-fit">
			<section id="left-auth-contents" className="flex-1 flex w-full ">
				<AuthContents action={action} />
			</section>
			<section
				id="auth-form"
				className="sm:w-1/2 md:w-5/12 2xl:w-4/12 bg-vn-black flex items-center justify-center min-w-fit"
			>
				<AuthForm action={action} />
			</section>
		</main>
	);
};

export default RootAuth;
