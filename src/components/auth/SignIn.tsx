import AuthForm from "@/components/auth/AuthForm";
import { useState, useContext } from "react";
import { FirebaseContext } from "@/App";
import { IFormEntries } from "@/utils/types/FormEntries";
import { signInWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {
	const { db, auth } = useContext(FirebaseContext);
	const [error, setError] = useState<string>("");
	const [isSigninUp, setIsSigningUp] = useState(false);

	async function signInUser(
		e: React.InvalidEvent<HTMLFormElement>
	): Promise<void> {
		e.preventDefault();
		const form = new FormData(e.currentTarget);
		const formEntries = Object.fromEntries(form.entries());
		if (showError(e, formEntries)) {
			setIsSigningUp(true);
			try {
				const signIn = await signInWithEmailAndPassword(
					auth,
					formEntries.email.toString(),
					formEntries.password.toString()
				);
			} catch (err) {
				setIsSigningUp(false);
				setError("*invalid email and password");
				console.log(err);
			}
		}
	}

	function showError(
		e: React.InvalidEvent<HTMLFormElement>,
		{ email, password, passConf }: IFormEntries
	): boolean {
		const formElement = e.target;

		if (password.length < 8) {
			// custom validation constraint
			setError("* A User's password shouldn't be less than 8 characters");
			return false;
		} else if (email.length === 0) {
			setError("* Please enter your email address");
			return false;
		} else if (!formElement.checkValidity()) {
			setError("*Please check your email and password");
		}
		return formElement.reportValidity();
	}

	return (
		<>
			<AuthForm
				processingAuth={isSigninUp}
				setError={setError}
				handleSubmit={signInUser}
				error={error}
				action={window.location.pathname}
			/>
		</>
	);
};

export default SignIn;
