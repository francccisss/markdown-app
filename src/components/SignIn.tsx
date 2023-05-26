import { IAuthProps, mapFormInputs } from "@/utils/formInputs";

const SignIn = ({ handleSubmit, action }: IAuthProps) => {
	return (
		<form
			className="text-vn-white flex flex-col gap-9 mt-6 mb-1"
			onSubmit={handleSubmit}
		>
			{mapFormInputs(action)}
			<button type="submit" className="text-[#FFFFFF] bg-vn-blue py-4">
				Sign in
			</button>
		</form>
	);
};

export default SignIn;
