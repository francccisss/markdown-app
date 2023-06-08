import React from "react";

interface IFormInputsProps {
	name: string;
	htmlFor: string;
	label: string;
	id: string;
	type: string;
	minLength?: number;
}
export const formInputs: IFormInputsProps[] = [
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
		name: "passConf",
		htmlFor: "passConf",
		label: "Confirm Password",
		type: "password",
		id: "passConf",
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

export function showRelevantInputs(): IFormInputsProps[] {
	if (window.location.pathname === "/sign-in") {
		const filterInputs = formInputs.filter(
			(input) => input.id !== "passConf"
		);
		return filterInputs;
	}
	return formInputs;
}
