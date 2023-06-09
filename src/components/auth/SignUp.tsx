import AuthForm from "@/components/auth/AuthForm";
import { useState, useContext, useEffect } from "react";
import { FirebaseContext } from "@/App";
import {
	User,
	createUserWithEmailAndPassword,
	deleteUser,
	onAuthStateChanged,
} from "firebase/auth";
import { collection, setDoc, addDoc, doc } from "firebase/firestore";

const SignUp = () => {
	const [error, setError] = useState<string>("");
	const { db, auth } = useContext(FirebaseContext);
	const [signedUp, setSignedUp] = useState(false);

	async function setUserInDatabase(user: User | null) {
		if (user === null) {
			setError("Error");
			throw "Unable to add user to database";
		} else {
			try {
				const usersRef = doc(db, "users", user.uid);
				const setUser = await setDoc(usersRef, {
					email: user === null ? "" : user.email,
					dateAdded: new Date(),
				});
				console.log("Store user in firestore");
			} catch (err) {
				setError("Something went wrong please comeback another time");
				throw err;
			}
		}
	}

	async function signUpUser(e: React.InvalidEvent<HTMLFormElement>) {
		e.preventDefault();
		const formValidation = e.target;
		const form = new FormData(e.currentTarget);
		const formEntries = Object.fromEntries(form.entries());
		console.log(formEntries);
		if (
			formValidation.checkValidity() &&
			formEntries.password === formEntries.passConf
		) {
			try {
				const createUser = await createUserWithEmailAndPassword(
					auth,
					formEntries.email.toString(),
					formEntries.password.toString()
				);
				console.log(createUser.user);
				console.log("signed up");
				await setUserInDatabase(auth.currentUser);
				return formEntries;
			} catch (err) {
				setError("*invalid email address");
				console.log(err);
			}
		}
		if (!formValidation.checkValidity()) {
			setError("*Please check your email and password");
		}
		if (formEntries.password !== formEntries.passConf) {
			setError("*Password doesn't match");
		}
	}

	return (
		<>
			<AuthForm
				setError={setError}
				handleSubmit={signUpUser}
				error={error}
				action={window.location.pathname}
			/>
		</>
	);
};

export default SignUp;
