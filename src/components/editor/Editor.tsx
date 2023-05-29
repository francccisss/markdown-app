import ReactCodeMirror from "@uiw/react-codemirror";
import { editorAppTheme } from "@/assets/themes/editorTheme";
import { vim } from "@replit/codemirror-vim";
import { markdownLanguage, markdown } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import "./editor.scss";

export interface IEdtiorProps {
	onChange: (value: string) => void;
	input: string;
	newWidth?: number;
}

const Editor = ({ onChange, input, newWidth }: IEdtiorProps) => {
	return (
		<section
			id="editor-container"
			className="z-10 h-full w-1/2 overflow-y-auto"
			style={{ width: `${newWidth}px` }}
		>
			<ReactCodeMirror
				theme={editorAppTheme}
				value={input}
				onChange={onChange}
				minWidth="0px"
				height="100%"
				extensions={[
					vim(),
					markdown({
						base: markdownLanguage,
						codeLanguages: languages,
						addKeymap: true,
					}),
				]}
				basicSetup={{
					lineNumbers: false,
					foldGutter: false,
					highlightActiveLine: false,
				}}
				onCreateEditor={(view, state) => {
					console.log(state.doc);
					console.log("vim");
				}}
			/>
		</section>
	);
};

export default Editor;
