import { FirebaseContext } from "@/App";
import AuthContents from "@/components/AuthContents";
import AuthForm from "@/components/AuthForm";
import { useState, useContext } from "react";
import { useParams, NavLink, useLoaderData } from "react-router-dom";

const RootAuth = () => {
	const { action } = useLoaderData() as ReturnType<any>;
	const { db, auth } = useContext(FirebaseContext);
	const [error, setError] = useState<string>("");

	async function signUpUser(
		e: React.InvalidEvent<HTMLFormElement>
	): Promise<void> {
		e.preventDefault();
		const form = new FormData(e.currentTarget);
		const formEntries = Object.fromEntries(form.entries());
		console.log(formEntries);
		console.log("signed up");
	}

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

	function validateUserCredentialsOnChange(
		e: React.ChangeEvent<HTMLInputElement>
	): void {
		const input = e.target;
		if (input.validity.tooShort) {
			console.log("minimum passowrd should be 8 characters");
			setError("Users password needs to have a minimum of 8 characters");
			input.setCustomValidity("password Mismatched");
		} else if (input.validity.typeMismatch) {
			console.log("pattern mismatch");
			setError("Input needs to be an email address");
		} else if (input.validity.valueMissing) {
			setError("You need to enter your email and password");
			console.log("You need to enter your email and password");
		} else {
			input.value === "" ? setError("") : setError(error);
		}
	}

	return (
		<main id="auth" className="page flex bg-[#ffffff] h-screen min-w-fit">
			<section id="left-auth-contents" className="flex-1 flex w-full ">
				<AuthContents action={action} />
			</section>
			<section
				style={{
					boxShadow: "-2px 0px 10px 2px rgba(0,0,0,.5)",
				}}
				id="auth-form"
				className="z-10 max-md:w-1/2 md:w-4/12 lg:w-5/12 2xl:w-4/12 bg-vn-black flex items-center justify-center "
			>
				<AuthForm
					validateOnChange={validateUserCredentialsOnChange}
					error={error}
					handleSubmit={action === "/" ? signInUser : signUpUser}
					action={action}
				/>
			</section>
		</main>
	);
};

export default RootAuth;
