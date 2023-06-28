import { FirebaseContext } from "@/utils/contexts/firebaseContext";
import { sendPasswordResetEmail } from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const PasswordRecovery = () => {
	const { auth, db } = useContext(FirebaseContext);
	const [isProcessing, setIsProcessing] = useState(false);
	const [isRetrieved, setIsRetrieved] = useState(false);
	const navigate = useNavigate();

	async function handleOnSubmit(
		e: React.FormEvent<HTMLFormElement>
	): Promise<void> {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const formEntry = Object.fromEntries(formData);
		try {
			setIsProcessing(true);
			console.log("processing");
			if (formEntry.email !== "") {
				await sendPasswordResetEmail(auth, formEntry.email as string);
				console.log("done");
				setIsProcessing(false);
				setIsRetrieved(true);
				setTimeout(() => {
					console.log("Navigating to Sign In page");
					navigate("/sign-in");
				}, 2000);
			} else {
				throw "Email input is empty";
			}
		} catch (err) {
			setIsProcessing(false);
			throw err;
		}
	}

	return (
		<section
			id="password-recovery-container"
			className=" relative text-vn-white flex flex-col gap-6 items-center justify-center"
		>
			{isRetrieved && (
				<span
					id="retrieval-success-popup"
					className="absolute top-[-8%] left-0 text-xs "
				>
					<p className="text-vn-green">
						Password recovery will be sent to you email address
					</p>
				</span>
			)}
			<h1 className="font-semibold text-3xl ">Forgot your password?</h1>
			<form
				onSubmit={handleOnSubmit}
				className="items-center flex flex-col w-full "
			>
				<input
					type="email"
					id="email"
					name="email"
					required
					placeholder="Please enter your email"
					className={`mb-6 valid:border-vn-green placeholder:text-[#ffffff60]  p-2 w-full valid:hover:border-vn-green focus:valid:border-vn-green focus:invalid:border-vn-red hover:border-vn-white transition-colors  focus-within:border-vn-white focus-within:transition-[border-color] duration-150 ease-in-out appearance-none outline-none text-vn-white bg-[transparent] border-b-[1px] border-[#D9D9D970]`}
				/>
				<button
					disabled={isProcessing}
					type="submit"
					className="px-4 py-3 w-full disabled:bg-vn-dark-blue disabled:text-[#ffffff60] text-[#FFFFFF] drop-shadow-md bg-vn-blue hover:bg-[#7086FF] ease-out duration-150 transition-all"
				>
					Send Recovery
				</button>
			</form>
			<span className="flex items-center text-sm">
				<p>Remembered your password?</p>
				<Link
					to={"/sign-in"}
					className=" hover:transition-colors duration-150 ease-in-out inline-block ml-1 text-vn-blue  "
				>
					{" "}
					Sign in
				</Link>
			</span>
		</section>
	);
};

export default PasswordRecovery;
