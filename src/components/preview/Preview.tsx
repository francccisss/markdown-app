import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import "./preview.scss";
import remarkGfm from "remark-gfm";
const Preview = () => {
	return (
		<section id="markdown-preview " className="">
			<ReactMarkdown children={"input"} remarkPlugins={[remarkGfm]} />
		</section>
	);
};

export default Preview;
