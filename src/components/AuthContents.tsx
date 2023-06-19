import RootText from "./RootText";
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
				className="flex flex-col flex-1 z-30 p-10 justify-center items-start gap-6 overflow-auto max-xl:justify-start"
			>
				<WelcomeText />
				<RootText
					title="Free Note Taking App"
					para="
				Mainly targeted for vim users or people who wants to use vim when
				using a note taking app(cause I know I do)"
				/>
				<RootText
					title="Free Note Taking App"
					para="
				Mainly targeted for vim users or people who wants to use vim when
				using a note taking app(cause I know I do)"
				/>

				<RootText
					title="Free Note Taking App"
					para="
				Mainly targeted for vim users or people who wants to use vim when
				using a note taking app(cause I know I do)"
				/>
			</section>
			<Wave />
		</div>
	);
};

export default AuthContents;
