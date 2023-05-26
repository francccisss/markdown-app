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
		<div className="flex flex-col z-10 text-[#ffffff]">
			<div id="instruct-user-txt">
				<h1 className="font-semibold text-4xl mb-[8px]">
					{action === "/" ? text.signIn.header : text.signUp.header}
				</h1>
				<p>Enter your account details below</p>
			</div>
			{children}
			<div id="form-actions">
				{action === "/" ? (
					<div id="forgot-redirect">
						<Link>{text.signIn.forgot}</Link>
					</div>
				) : null}
				<div id="create-signin">
					<span>
						<p>
							{action === "/" ? text.signIn.noAcc : text.signUp.exist}
						</p>
					</span>
					<Link>
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
