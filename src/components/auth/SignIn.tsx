import AuthForm from "@/components/auth/AuthForm";
import { useState, useContext } from "react";
import { FirebaseContext } from "@/App";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const SignIn = () => {
	const { db, auth } = useContext(FirebaseContext);
	const [error, setError] = useState<string>("");
	const provider = new GoogleAuthProvider();

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
			setError("Please check your email and password");
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
