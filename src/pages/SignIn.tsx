import AuthForm from "@/components/AuthForm";

const SignIn = () => {
	return (
		<>
			<AuthForm action={window.location.pathname} />
		</>
	);
};

export default SignIn;
