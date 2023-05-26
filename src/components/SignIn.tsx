import { IAuthProps, mapFormInputs } from "@/utils/formInputs";

const SignIn = ({ handleSubmit, action }: IAuthProps) => {
	return (
		<form
			className="text-vn-white flex flex-col gap-9 mt-6 mb-6"
			onSubmit={handleSubmit}
		>
			{mapFormInputs(action)}
			<button type="submit" className="">
				Sign in
			</button>
		</form>
	);
};

export default SignIn;
