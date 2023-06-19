export const Wave = () => {
	return (
		<svg
			id="patternId"
			width="100%"
			height="100%"
			xmlns="http://www.w3.org/2000/svg"
			shapeRendering="geometricPrecision"
		>
			<defs>
				<pattern
					id="a"
					patternUnits="userSpaceOnUse"
					width="40"
					height="40"
					patternTransform="scale(1) rotate(0)"
				>
					<rect x="0" y="0" width="100%" height="100%" fill="#ffffff" />
					<path
						d="M20-5V5m0 30v10m20-30v10M0 15v10"
						strokeLinejoin="round"
						strokeLinecap="round"
						strokeWidth="2"
						stroke="hsla(225, 6%, 14%, 1)"
						fill="none"
					/>
					<path
						d="M-5 40H5M-5 0H5m30 0h10M35 40h10M15 20h10"
						strokeLinejoin="round"
						strokeLinecap="round"
						strokeWidth="2"
						stroke="hsla(225, 6%, 14%, 1)"
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
