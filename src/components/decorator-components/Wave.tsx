export const Wave = () => {
	return (
		<svg
			className="z-0 absolute"
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
						stroke="#6b7ff2"
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

		// <svg
		// 	id="visual"
		// 	className="z-0 absolute -bottom-0"
		// 	viewBox="0 0 960 540"
		// 	width="100%"
		// 	shapeRendering="geometricPrecision"
		// 	xmlns="http://www.w3.org/2000/svg"
		// 	xmlnsXlink="http://www.w3.org/1999/xlink"
		// 	version="1.1"
		// >
		// 	<path
		// 		d="M0 343L137 316L274 337L411 394L549 382L686 365L823 353L960 393L960 541L823 541L686 541L549 541L411 541L274 541L137 541L0 541Z"
		// 		fill="#6b7ff2"
		// 	></path>
		// 	<path
		// 		d="M0 378L137 413L274 372L411 354L549 412L686 423L823 364L960 376L960 541L823 541L686 541L549 541L411 541L274 541L137 541L0 541Z"
		// 		fill="#5b6dca"
		// 	></path>
		// 	<path
		// 		d="M0 413L137 453L274 444L411 452L549 430L686 395L823 430L960 438L960 541L823 541L686 541L549 541L411 541L274 541L137 541L0 541Z"
		// 		fill="#4c5ba3"
		// 	></path>
		// 	<path
		// 		d="M0 451L137 475L274 487L411 476L549 446L686 481L823 485L960 455L960 541L823 541L686 541L549 541L411 541L274 541L137 541L0 541Z"
		// 		fill="#3f497d"
		// 	></path>
		// 	<path
		// 		d="M0 482L137 485L274 511L411 493L549 510L686 493L823 495L960 481L960 541L823 541L686 541L549 541L411 541L274 541L137 541L0 541Z"
		// 		fill="#323859"
		// 	></path>
		// </svg>
	);
};
