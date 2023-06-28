import { Link } from "react-router-dom";

const PasswordRecovery = () => {
	return (
		<section
			id="password-recovery-container"
			className="text-vn-white flex flex-col gap-6 items-center justify-center"
		>
			<h1 className="font-semibold text-3xl ">Forgot your password?</h1>
			<form className="items-center flex flex-col w-full ">
				<input
					type="email"
					id="email"
					name="email"
					required
					placeholder="Please enter your email"
					className={`mb-6 valid:border-vn-green p-2 w-full valid:hover:border-vn-green focus:valid:border-vn-green focus:invalid:border-vn-red hover:border-vn-white transition-colors  focus-within:border-vn-white focus-within:transition-[border-color] duration-150 ease-in-out appearance-none outline-none text-vn-white bg-[transparent] border-b-[1px] border-[#D9D9D970]`}
				/>
				<button
					type="submit"
					className="px-4 py-3 w-full disabled:bg-vn-dark-blue disabled:text-[#ffffff60] text-[#FFFFFF] drop-shadow-md bg-vn-blue hover:bg-[#7086FF] ease-out duration-150 transition-all"
				>
					Send Recovery
				</button>
			</form>
			<span className="flex items-center text-sm">
				<p>Remembered your password?</p>
				<Link
					to={"/sign-in"}
					className=" hover:transition-colors duration-150 ease-in-out inline-block ml-1 text-vn-blue  "
				>
					{" "}
					Sign in
				</Link>
			</span>
		</section>
	);
};

export default PasswordRecovery;
