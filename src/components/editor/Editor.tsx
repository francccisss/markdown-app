import ReactCodeMirror from "@uiw/react-codemirror";
import { editorAppTheme } from "@/assets/themes/editorThemecopy";
import { vim } from "@replit/codemirror-vim";
import { markdownLanguage, markdown } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import "./editor.scss";
import createTheme from "@uiw/codemirror-themes";

interface IEditorProps {
	onChange: (value: string) => void;
	input: string;
	newWidth?: number;
}

const theme = createTheme({
	theme: "dark",
	styles: [],
	settings: {
		fontFamily: "inter",
	},
});

const Editor = ({ onChange, input }: IEditorProps) => {
	return (
		<ReactCodeMirror
			theme={editorAppTheme}
			value={input}
			onChange={onChange}
			className="markdown-editor font-semibold focus-within:border-t-[3px] text-sm focus-within:border-vn-blue border-solid outline-none flex-1 flex justify-center "
			height="100%"
			width="100%"
			extensions={[
				theme,
				vim(),
				markdown({
					base: markdownLanguage,
					codeLanguages: languages,
					addKeymap: true,
				}),
			]}
			basicSetup={{
				foldGutter: false,
				highlightActiveLine: false,
			}}
		/>
	);
};

export default Editor;
