import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import "./preview.scss";
import "github-markdown-css";
import remarkGfm from "remark-gfm";
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark as previewStyle } from "react-syntax-highlighter/dist/esm/styles/prism";

interface IPreviewProps {
	markdownInput: string;
}

const Preview = ({ markdownInput }: IPreviewProps) => {
	return (
		<section
			id="markdown-preview"
			className={`overflow-auto h-full px-16 min-[1650px]:px-36 py-5 z-10 markdown-body flex-1 w-0 `}
		>
			<ReactMarkdown
				children={markdownInput}
				remarkPlugins={[remarkGfm]}
				className="z-10 max-w-[100%] react-markdown"
				components={{
					code({ node, inline, className, children, ...props }) {
						const match = /language-(\w+)/.exec(className || "");
						return !inline && match ? (
							<SyntaxHighlighter
								{...props}
								className={"syntax-highlighter"}
								children={String(children).replace(/\n$/, "")}
								style={previewStyle}
								language={match[1]}
								PreTag="div"
							/>
						) : (
							<code {...props} className={className}>
								{children}
							</code>
						);
					},
				}}
			/>
		</section>
	);
};

export default Preview;
