import React from "react";

export const formInputs = [
	{
		name: "email",
		htmlFor: "email",
		label: "Email",
		id: "email",
	},

	{
		name: "pass",
		htmlFor: "pass",
		label: "Password",
		id: "password",
	},

	{
		name: "pass-conf",
		htmlFor: "pass-conf",
		label: "Confirm Password",
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
					className="text-sm block w-full text-[#D9D9D970]"
					htmlFor={input.htmlFor}
				>
					{input.label}
				</label>
				<input
					className="appearance-none outline-none text-vn-white bg-[transparent] border-b-[1px] border-[#D9D9D970]"
					id={input.id}
					name={input.name}
				/>
			</div>
		);
	});
};
