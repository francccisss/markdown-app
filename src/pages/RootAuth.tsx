import AuthContents from "@/components/AuthContents";
import AuthForm from "@/components/AuthForm";
import { useParams, NavLink, useLoaderData } from "react-router-dom";

const RootAuth = () => {
	const { action } = useLoaderData();
	return (
		<main
			id="auth"
			className="page 
		flex bg-[#ffffff] h-screen min-w-full"
		>
			<section
				id="left-auth-contents"
				className="flex-1 flex w-full 

			"
			>
				<AuthContents action={action} />
			</section>
			<section
				id="auth-form"
				className="w-1/2 lg:w-2/5 2xl:w-1/3 bg-vn-black"
			>
				<AuthForm action={action} />
			</section>
		</main>
	);
};

export default RootAuth;
