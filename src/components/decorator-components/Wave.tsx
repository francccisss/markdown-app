export const Wave = () => {
	return (
		<svg
			id="patternId"
			className="z-0 absolute"
			width="100%"
			height="100%"
			xmlns="http://www.w3.org/2000/svg"
		>
			<defs>
				<pattern
					id="a"
					patternUnits="userSpaceOnUse"
					width="21"
					height="21"
					patternTransform="scale(3) rotate(45)"
				>
					<rect
						x="0"
						y="0"
						width="100%"
						height="100%"
						fill="hsla(231, 28%, 27%, 1)"
					/>
					<path
						d="M3.25 10h13.5M10 3.25v13.5"
						transform="translate(0.5,0)"
						strokeLinecap="square"
						strokeWidth="5"
						stroke="hsla(231, 84%, 68%, 1)"
						fill="none"
					/>
				</pattern>
			</defs>
			<rect
				width="800%"
				height="800%"
				transform="translate(0,0)"
				fill="url(#a)"
			/>
		</svg>
	);
};
