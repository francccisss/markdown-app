import { IAuthProps, mapFormInputs } from "@/utils/formInputs";

const SignIn = ({ handleSubmit, action }: IAuthProps) => {
	return (
		<form className="text-vn-white" onSubmit={handleSubmit}>
			{mapFormInputs(action)}
			<button type="submit" className="">
				Sign in
			</button>
		</form>
	);
};

export default SignIn;
