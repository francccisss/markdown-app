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
	},

	{
		name: "pass-conf",
		htmlFor: "pass-conf",
		label: "Confirm Password",
		type: "password",
		id: "pass-conf",
	},
];

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

export const mapFormInputs: (action: string) => React.ReactNode = function (
	action
) {
	return showRelevantInputs(action).map((input) => {
		return (
			<div key={input.id} className="inputs-container flex flex-col ">
				<label
					className="text-sm block w-full text-[#D9D9D970] focus-within:text-vn-white hover:text-vn-white transition-colors duration-150 ease-in-out"
					htmlFor={input.htmlFor}
				>
					{input.label}
				</label>
				<input
					type={input.type}
					className="hover:border-vn-white transition-colors  focus-within:border-vn-white focus-within:transition-[border-color] duration-150 ease-in-out appearance-none outline-none text-vn-white bg-[transparent] border-b-[1px] border-[#D9D9D970]"
					id={input.id}
					name={input.name}
				/>
			</div>
		);
	});
};
