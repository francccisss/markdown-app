import GithubLink from "./GithubLink";
import WelcomeText from "./WelcomeText";
import { Wave } from "./decorator-components/Wave";

const AuthContents = () => {
	return (
		<div
			id="auth-contents"
			className="relative w-full bg-[#ffffff] rounded-2xl overflow-hidden"
		>
			<WelcomeText />
			<GithubLink />
			<Wave />
		</div>
	);
};

export default AuthContents;
