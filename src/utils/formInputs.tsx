import React from "react";

export const formInputs = [
	{
		name: "email",
		htmlFor: "email",
		label: "Email",
		id: "email",
		type: "email",
	},

	{
		name: "pass",
		htmlFor: "pass",
		label: "Password",
		id: "password",
		type: "password",
		minLength: 8,
	},

	{
		name: "pass-conf",
		htmlFor: "pass-conf",
		label: "Confirm Password",
		type: "password",
		id: "pass-conf",
		minLength: 8,
	},
];
export const authText = {
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

export interface IAuthProps {
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	action: string;
}

export function showRelevantInputs(action: string) {
	if (action === "/") {
		const filterInputs = formInputs.filter(
			(input) => input.id !== "pass-conf"
		);
		console.log(filterInputs);
		return filterInputs;
	} else {
		console.log(formInputs);
		return formInputs;
	}
}
