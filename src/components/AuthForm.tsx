import { useEffect, useMemo } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import { IAuthProps, mapFormInputs } from "@/utils/formInputs";
interface IAuthFormProps {
	action: "/" | "/sign-up";
	// handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const AuthForm = ({ action }: IAuthFormProps) => {
	const navigate = useNavigate();
	const text = {
		signIn: {
			header: "Sign in to Vimnotes",
			forgot: "Forgot your password?",
			noAcc: "Don't have an account?",
			linkBtnText: "Create now",
		},
		signUp: {
			header: "Sign up to Vimnotes",
			exist: "Already have an account?",
			linkBtnText: "Sign in",
		},
	};

	return (
		<div id="auth-form" className="flex w-2/3 flex-col z-10 text-[#ffffff]">
			<div id="instruct-user-txt">
				<h1 className="font-semibold mb-[8px] sm:text-2xl lg:text-3xl xl:text-4xl">
					{action === "/" ? text.signIn.header : text.signUp.header}
				</h1>
				<p className="font-light">Enter your account details below</p>
			</div>
			<form
				className="text-vn-white flex flex-col gap-9 mt-6 "
				onSubmit={(e) => {
					e.preventDefault();
					navigate("/app");
				}}
			>
				{mapFormInputs(action)}
				<button
					type="submit"
					className="text-[#FFFFFF] drop-shadow-md bg-vn-blue py-4 hover:bg-[#7086FF] ease-out duration-150 transition-all"
				>
					{action === "/" ? "Sign in" : "Sign up"}
				</button>
			</form>
			<div id="form-actions">
				{action === "/" ? (
					<div
						id="forgot-redirect"
						className="flex content-center justify-center mt-4 mb-4"
					>
						<Link
							to={"/"}
							className="hover:underline inline-block text-[#d9d9d970]"
						>
							{text.signIn.forgot}
						</Link>
					</div>
				) : null}
				<div
					id="create-signin"
					className="flex justify-between items-center text-sm pt-6 border-t-[1px] border-[#d9d9d970] max-lg:text-xs"
				>
					<span className="inline-block">
						<p className="text-[#D9D9D970]">
							{action === "/" ? text.signIn.noAcc : text.signUp.exist}
						</p>
					</span>
					<Link
						to={action === "/" ? "/sign-up" : "/"}
						className="hover:bg-[#D9D9D920] hover:transition-colors duration-150 ease-in-out px-7 py-3 inline-block bg-[#D9D9D910]"
					>
						{action === "/"
							? text.signIn.linkBtnText
							: text.signUp.linkBtnText}
					</Link>
				</div>
			</div>
		</div>
	);
};

export default AuthForm;
