import { Link } from "react-router-dom";

const AuthContents = ({ action }: { action: "/" | "/sign-up" }) => {
	return (
		<div
			id="auth-contents"
			className="relative bg-auth-left-waves bg-cover bg-no-repeat bg-center w-full"
		>
			<div className="md:top-1/4 md:left-14 auth-text-container text-vn-black w-[380px] inline-block absolute lg:top-24 lg:left-32">
				<h1 className="text-7xl font-bold border-b-2 border-black border-solid inline-block mb-[19px]">
					# Hi There!
				</h1>
				<div className="greet">
					<p className="text-4xl mb-2">
						Welcome to <span className="font-bold">Vimnotes</span>
					</p>
					<p className="text-2xl font-light">
						A simple markdown app with vim key mappings.
					</p>
				</div>
				<Link
					to={action === "/" ? "/sign-up" : "/"}
					className="hover:bg-[#5F72D9] ease-out duration-150 transition-all grow-0 font-bold text-[#ffffff] bg-vn-blue px-10 py-4 text-lg inline-block mt-[19px] drop-shadow-md"
				>
					{action === "/" ? "Create account" : "Do Something"}
				</Link>
			</div>
		</div>
	);
};

export default AuthContents;
