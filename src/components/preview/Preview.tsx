import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import "./preview.scss";
import "github-markdown-css";
import remarkGfm from "remark-gfm";
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark as previewStyle } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useEffect, useRef, useState } from "react";

interface IPreviewProps {
	markdownInput: string;
}

const Preview = ({ markdownInput }: IPreviewProps) => {
	const previewRef = useRef() as any;

	useEffect(() => {
		previewRef.current.focus();
	}, []);

	return (
		<section
			ref={previewRef}
			tabIndex={0}
			autoFocus
			onKeyDown={(e) => {
				e.preventDefault();
				const target = e.target as Element;
				switch (e.key) {
					case "G": {
						console.log("bottom scrolled");
						target.scrollTo({ top: 99999 });
						break;
					}
					case "g": {
						console.log("bottom scrolled");
						target.scrollTo({ top: 0 });
						break;
					}
					case "j": {
						console.log("scoll by 20");
						target.scrollBy({ top: 50, behavior: "smooth" });
						break;
					}
					case "k": {
						console.log("scoll by 20");
						target.scrollBy({ top: -50, behavior: "smooth" });
						break;
					}
				}
			}}
			id="markdown-preview"
			className={`@container outline-none h-full overflow-auto px-16 py-10 markdown-body flex-1 flex justify-center `}
		>
			<ReactMarkdown
				children={markdownInput}
				remarkPlugins={[remarkGfm]}
				className="z-10 react-markdown h-fit my-5 @[200px]:min-w-[200px] @[700px]:w-[800px] @[1000px]:w-[900px] "
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
