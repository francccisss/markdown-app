import ReactCodeMirror from "@uiw/react-codemirror";
import { editorAppTheme } from "@/assets/themes/editorThemecopy";
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
		<ReactCodeMirror
			theme={editorAppTheme}
			value={input}
			onChange={onChange}
			style={{ padding: "32px 0px" }}
			width={`${newWidth}px`}
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
				// lineNumbers: false,
				// foldGutter: false,
				highlightActiveLine: false,
			}}
			onCreateEditor={(view, state) => {
				console.log(state.doc);
				console.log("vim");
			}}
		/>
	);
};

export default Editor;
