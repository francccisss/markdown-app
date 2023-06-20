/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		colors: {
			"vn-blue": "#6B7FF2",
			"vn-dark-blue": "#323859",
			"vn-black": "#222326",
			"vn-green": "#75BF69",
			"vn-white": "#D9D9D9",
			"vn-red": "#F28390",
			"vn-dshade1-blue": "#323859",
			"vn-dshade2-blue": "#2c2f40",
			"vn-dshade-green": "#5c8c54",
			"vn-dshade-white": "#878a8c",
			"vn-dshade-white2": "#878A8C10",
			"vn-dshade-white3": "#878A8C30",
			"vn-dshade-black": "#2D2F33",
			"vn-outline-black": "#878a8c80",
		},
		extend: {
			backgroundImage: {
				"auth-left-waves": "url('./src/assets/img/waves.svg')",
			},
			minWidth: {
				"form-min": "20%",
			},
			borderColor: {
				"separator-grey-line": "#878a8c10",
				"note-grey-line": "#878a8c30",
			},
		},
	},
	plugins: [require("@tailwindcss/container-queries")],
};
