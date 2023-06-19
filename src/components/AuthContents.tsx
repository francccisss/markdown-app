import GithubLink from "./GithubLink";
import WelcomeText from "./WelcomeText";
import { Wave } from "./decorator-components/Wave";

const AuthContents = () => {
	return (
		<div
			id="auth-contents"
			className="relative w-full bg-[#ffffff] flex rounded-2xl overflow-hidden"
		>
			<section
				id="text-section"
				className="flex flex-col flex-1 z-30 px-10 justify-center items-start gap-6"
			>
				<WelcomeText />
				<GithubLink />
			</section>
			<Wave />
		</div>
	);
};

export default AuthContents;
