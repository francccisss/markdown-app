import { NavLink } from "react-router-dom";

interface IAuthFormProps {
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	action: "/" | "/sign-up";
}
const AuthForm = ({ handleSubmit, action }: IAuthFormProps) => {
	console.log(action);
	return (
		<>
			<NavLink to={action === "/" ? "/sign-up" : "/"}>Link</NavLink>
			<form onSubmit={handleSubmit}>This is a form in {action}</form>;
		</>
	);
};

export default AuthForm;
