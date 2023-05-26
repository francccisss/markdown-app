import { IAuthProps, mapFormInputs } from "@/utils/formInputs";

const SignUp = ({ handleSubmit, action }: IAuthProps) => {
	return (
		<form
			className="text-vn-white flex flex-col gap-9 mt-6 mb-6"
			onSubmit={handleSubmit}
		>
			{mapFormInputs(action)}
			<button type="submit" className="text-[#FFFFFF] bg-vn-blue py-6">
				Sign Up
			</button>
		</form>
	);
};

export default SignUp;
