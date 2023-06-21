import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import "./preview.scss";
import "github-markdown-css";
import remarkGfm from "remark-gfm";
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark as previewStyle } from "react-syntax-highlighter/dist/esm/styles/prism";

interface IPreviewProps {
	markdownInput: string;
	newPos: number;
}

const Preview = ({ markdownInput, newPos }: IPreviewProps) => {
	return (
		<section
			id="markdown-preview"
			className={`translate-x-[${newPos}px]  @container overflow-auto px-16 py-10 z-10 markdown-body box-border flex-1 w-0 flex justify-center `}
		>
			<ReactMarkdown
				children={markdownInput}
				remarkPlugins={[remarkGfm]}
				className="z-10 react-markdown h-fit my-5 @[200px]:min-w-[200px] @[700px]:w-[800px] @[1000px]:w-[1000px]"
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
