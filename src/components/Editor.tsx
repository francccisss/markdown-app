import ReactCodeMirror from "@uiw/react-codemirror";
import { editorAppTheme } from "@/assets/themes/editorTheme";
import { vim } from "@replit/codemirror-vim";
import { markdownLanguage, markdown } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";

const Editor = () => {
	return (
		<section id="editor" className="flex-1">
			<ReactCodeMirror
				theme={editorAppTheme}
				value={"# Hello"}
				// onChange={onChange}
				minWidth="100%"
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
					lineNumbers: true,
					// highlightActiveLine: false,
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
