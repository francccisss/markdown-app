import ReactCodeMirror from "@uiw/react-codemirror";
import { editorAppTheme } from "@/assets/themes/editorThemecopy";
// import { editorAppTheme } from "@/assets/themes/editorTheme";
import { vim } from "@replit/codemirror-vim";
import { markdownLanguage, markdown } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import "./editor.scss";
import createTheme from "@uiw/codemirror-themes";

export interface IEditorProps {
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

const Editor = ({ onChange, input, newWidth }: IEditorProps) => {
	return (
		<ReactCodeMirror
			theme={editorAppTheme}
			value={input}
			onChange={onChange}
			className="markdown-editor focus-within:border-t-[3px] text-sm focus-within:border-vn-blue border-solid outline-none"
			height="100%"
			width={`${newWidth}px`}
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
			onUpdate={(viewUpdate) => {
				// returning true and false whenever width is being moved
				console.log(viewUpdate.geometryChanged);
			}}
		/>
	);
};

export default Editor;
