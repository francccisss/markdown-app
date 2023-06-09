import AuthForm from "@/components/auth/AuthForm";
import { useState, useContext } from "react";
import { FirebaseContext } from "@/App";
import {
	User,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
} from "firebase/auth";
import { collection, setDoc, doc } from "firebase/firestore";

const SignUp = () => {
	const [error, setError] = useState<string>("");
	const { db, auth } = useContext(FirebaseContext);

	onAuthStateChanged(auth, (user) => {
		if (user) {
			setUserInDatabase(user);
		} else {
			console.log("no users");
		}
	});

	async function setUserInDatabase(user: User) {
		try {
			const usersRef = doc(collection(db, "users"));
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
