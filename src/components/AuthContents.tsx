import RootText from "./RootText";
import WelcomeText from "./WelcomeText";
import { Wave } from "./decorator-components/Wave";

const AuthContents = () => {
	return (
		<div
			id="auth-contents"
			className="relative w-full bg-[#ffffff] flex rounded-2xl box-border overflow-hidden justify-center items-center"
		>
			<section
				id="text-section"
				className="overflow-auto max-h-screen py-20 flex flex-col flex-1 z-30 px-16 max-xl:py-20 max-xl:px-10 justify-center items-start gap-6 max-xl:justify-start"
			>
				<section id="main-auth-text" className="flex flex-col gap-6">
					<WelcomeText />
					<RootText
						title="Get Started"
						para="By signing up or creating an account"
					/>
				</section>

				<section className="split-started flex gap-6">
					<RootText
						title="Split Pane"
						para="To easily preview the changes written down and can also be expanded."
					/>
					<RootText
						title="Free Note Taking App"
						para="
				Mainly targeted for vim users or people who are too used to vim keymaps when
				using a note taking app (cause I know I do)."
					/>
				</section>
			</section>
			<Wave />
		</div>
	);
};

export default AuthContents;
