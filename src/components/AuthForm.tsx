import { useEffect, useMemo } from "react";
import { Link, NavLink } from "react-router-dom";

interface IAuthFormProps {
	children: React.ReactNode;
	action: "/" | "/sign-up";
}

const AuthForm = ({ action, children }: IAuthFormProps) => {
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
				<h1 className="font-semibold text-4xl mb-[8px]">
					{action === "/" ? text.signIn.header : text.signUp.header}
				</h1>
				<p className="font-light">Enter your account details below</p>
			</div>
			{children}
			<div id="form-actions">
				{action === "/" ? (
					<div
						id="forgot-redirect"
						className="flex content-center justify-center mt-4 mb-4"
					>
						<Link className="inline-block text-[#d9d9d970]">
							{text.signIn.forgot}
						</Link>
					</div>
				) : null}
				<div
					id="create-signin"
					className="flex justify-between items-center text-sm pt-6 border-t-[1px] border-[#d9d9d970]"
				>
					<span className="inline-block">
						<p className="text-[#D9D9D970]">
							{action === "/" ? text.signIn.noAcc : text.signUp.exist}
						</p>
					</span>
					<Link className="hover:bg-[#D9D9D920] hover:transition-colors duration-150 ease-in-out px-7 py-3 inline-block bg-[#D9D9D910]">
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
