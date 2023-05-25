import { useMemo } from "react";
import { NavLink } from "react-router-dom";

interface IAuthFormProps {
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	action: "/" | "/sign-up";
}

const AuthForm = ({ handleSubmit, action }: IAuthFormProps) => {
	console.log(action);

	const formInputs = [
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

	const mapFormInputs = formInputs.map((input) => {
		return (
			<div className="inputs-container">
				<label className="block" htmlFor={input.htmlFor}>
					{input.label}
				</label>
				<input id={input.id} name={input.name} />
			</div>
		);
	});

	return (
		<div className="">
			<form className="text-vn-white" onSubmit={handleSubmit}>
				this is a form
				{mapFormInputs}
			</form>
		</div>
	);
};

export default AuthForm;
