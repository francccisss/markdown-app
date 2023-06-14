import AuthContents from "@/components/AuthContents";
import { FirebaseContext } from "@/utils/contexts/firebaseContext";
import { User, deleteUser, onAuthStateChanged } from "firebase/auth";
import { doc, collection, getDoc } from "firebase/firestore";
import { useState, useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const RootAuth = () => {
	const navigate = useNavigate();
	const { auth, db } = useContext(FirebaseContext);

	useEffect(() => {
		onAuthStateChanged(auth, async (user) => {
			if (user && (await checkIfUserExists(user))) {
				navigate("/app");
			} else if (user === null) {
				navigate("/sign-in");
				auth.currentUser ? deleteUser(auth.currentUser) : 0;
			}
		});
	}, []);

	async function checkIfUserExists(user: User): Promise<boolean> {
		try {
			const useRef = doc(db, "users", user.uid);
			const userDoc = await getDoc(useRef);
			return userDoc.exists() ? true : false;
		} catch (err) {
			console.log(err);
			return false;
		}
	}

	return (
		<main id="auth" className="page flex bg-[#ffffff] h-screen min-w-fit">
			<section id="left-auth-contents" className="flex-1 flex w-full ">
				<AuthContents />
			</section>
			<section
				style={{
					boxShadow: "-2px 0px 10px 2px rgba(0,0,0,.5)",
				}}
				id="auth-form"
				className="z-10 max-md:w-1/2 md:w-4/12 lg:w-5/12 2xl:w-4/12 bg-vn-black flex items-center justify-center "
			>
				<Outlet />
			</section>
		</main>
	);
};

export default RootAuth;
