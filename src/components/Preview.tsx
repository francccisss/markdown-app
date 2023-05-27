import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const Preview = () => {
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
		<section id="markdown-preview" className=" min-w-[300px]">
			<ReactMarkdown children={"input"} remarkPlugins={[]} />
		</section>
	);
};

export default Preview;
