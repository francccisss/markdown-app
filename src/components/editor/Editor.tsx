import ReactCodeMirror from "@uiw/react-codemirror";
import { editorAppTheme } from "@/assets/themes/editorTheme";
import { vim } from "@replit/codemirror-vim";
import { markdownLanguage, markdown } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import "./editor.scss";

interface IEdtiorProps {
	onChange: (value: string) => void;
	input: string;
	editorRef;
	newWidth: number;
}

const Editor = ({ onChange, input, editorRef, newWidth }: IEdtiorProps) => {
	return (
		<section
			id="editor-container"
			ref={editorRef}
			className="z-10 h-full"
			// style={{ width: `${newWidth}%` }}
		>
			<ReactCodeMirror
				theme={editorAppTheme}
				value={input}
				onChange={onChange}
				minWidth="0px"
				// className="markdown-body"
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
