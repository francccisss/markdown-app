import { Link } from "react-router-dom";

const AuthContents = ({ action }: { action: "/" | "/sign-up" }) => {
	return (
		<div
			id="auth-contents"
			className="bg-auth-left-waves bg-cover bg-no-repeat bg-center w-full"
		>
			<div className="auth-text-container w-[30%]">
				<h1 className="text-7xl font-bold border-b-2 border-black border-solid inline-block">
					# Hi There!
				</h1>
				<div className="greet">
					<p className="text-4xl">
						Welcome to <span className="font-bold">Vimnotes</span>
					</p>
					<p className="text-2xl font-light">
						A simple markdown app with vim key mappings.
					</p>
				</div>
				<Link
					to={action === "/" ? "/sign-up" : "/"}
					className="font-bold text-[#ffffff] bg-vn-blue px-10 py-4 text-lg inline-block"
				>
					Create account
				</Link>
			</div>
		</div>
	);
};

export default AuthContents;
