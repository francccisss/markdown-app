import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import "./preview.scss";
import "github-markdown-css";
import remarkGfm from "remark-gfm";

interface IPreviewProps {
	markdownInput: string;
}

const Preview = ({ markdownInput }: IPreviewProps) => {
	return (
		<section id="markdown-preview" className="markdown-body px-4">
			<ReactMarkdown children={markdownInput} remarkPlugins={[remarkGfm]} />
		</section>
	);
};

export default Preview;
