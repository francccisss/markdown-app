import { IAuthProps, mapFormInputs } from "@/utils/formInputs";

const SignUp = ({ handleSubmit, action }: IAuthProps) => {
	return (
		<form className="text-vn-white" onSubmit={handleSubmit}>
			{mapFormInputs(action)}
			<button type="submit" className="">
				Sign Up
			</button>
		</form>
	);
};

export default SignUp;
