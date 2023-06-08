import AuthForm from "@/components/AuthForm";
import { useState, useContext } from "react";
import { FirebaseContext } from "@/App";

const SignIn = () => {
	const [error, setError] = useState<string>("");
	const { db, auth } = useContext(FirebaseContext);
	async function signInUser(
		e: React.InvalidEvent<HTMLFormElement>
	): Promise<void> {
		e.preventDefault();
		const formValidation = e.target;
		if (formValidation.checkValidity()) {
			const form = new FormData(e.currentTarget);
			const formEntries = Object.fromEntries(form.entries());
			console.log(formEntries);
			console.log("signed in");
		} else {
			console.log("wrong credentials");
		}
	}
	return (
		<>
			<AuthForm
				setError={setError}
				handleSubmit={signInUser}
				error={error}
				action={window.location.pathname}
			/>
		</>
	);
};

export default SignIn;
