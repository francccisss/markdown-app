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
				className="flex flex-col flex-1 z-30 p-20 xl:py-20 max-xl:px-10 justify-between items-start overflow-auto gap-3 max-xl:justify-start"
			>
				<WelcomeText />
				<RootText
					title="Free Note Taking App"
					para="
				Mainly targeted for vim users or people who are too used to vim keymaps when
				using a note taking app (cause I know I do)."
				/>
				<section className="flex gap-3 ">
					<RootText title="Simple to use" para="An intuitive UI design." />
					<RootText title="Syntax Highlighting" para="Yes." />
				</section>
				<section className="flex gap-3 ">
					<RootText
						title="Split Pane"
						para="To easily preview the changes written down and can also be expanded."
					/>
					<RootText title="Github" para="" />
				</section>
			</section>
			<Wave />
		</div>
	);
};

export default AuthContents;
