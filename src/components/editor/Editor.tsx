import ReactCodeMirror from "@uiw/react-codemirror";
import { editorAppTheme } from "@/assets/themes/editorThemecopy";
import { vim } from "@replit/codemirror-vim";
import { markdownLanguage, markdown } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import "./editor.scss";
import createTheme from "@uiw/codemirror-themes";
import { EditorView } from "@codemirror/view";
import { useEffect, useRef } from "react";

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
		<section className="@container bg-vn-dshade-black pt-10 px-16 flex w-full h-full justify-center overflow-auto">
			<ReactCodeMirror
				autoFocus
				theme={editorAppTheme}
				value={input}
				onChange={onChange}
				className="markdown-editor @[500px]:min-w-[500px] @[700px]:text-sm @[700px]:w-[800px] @[1000px]:w-[900px] font-medium focus-within:border-t-[3px] text-[.8rem] border-none outline-none "
				minHeight="100%"
				extensions={[
					EditorView.lineWrapping,
					theme,
					// vim(),
					markdown({
						base: markdownLanguage,
						codeLanguages: languages,
						addKeymap: true,
					}),
				]}
				basicSetup={{
					foldGutter: false,
					highlightActiveLine: false,
					lineNumbers: false,
				}}
			/>
		</section>
	);
};

export default Editor;
