import ReactCodeMirror from "@uiw/react-codemirror";
import { editorAppTheme } from "@/assets/themes/editorTheme";
import { vim } from "@replit/codemirror-vim";
import { markdownLanguage, markdown } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import "./editor.scss";

const Editor = () => {
	const input = `This is a title
# Header 1
## jsCode snippet and some shit that i dont understand
		This is a code snippet
>Line break  
>Another Line Break

### This is a list
1. Ordered list item 1
2. Ordered list item 2
3. Ordered list item 3
	
\`\`\`js
const searchQuery = useCallback(
	(input: string, noteList: Array<{ title: string }>) => {
			const filterNotes = noteList.filter((note) => {
				return note.title.includes(input) && note;
			});
			console.log(filterNotes);
			if (input !== "") {
				return setNoteLists(filterNotes);
			}
			return setNoteLists(originalNotes);
		},
		[]
	);
\`\`\`\
	`;
	return (
		<section id="editor-container" className="flex-1 font-serif ">
			<ReactCodeMirror
				theme={editorAppTheme}
				value={input}
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
