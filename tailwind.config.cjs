/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],

	theme: {
		fontFamily: {
			'cabinetgrotesk': ["CabinetGrotesk", "sans-serif"],
			'inter': ["Inter", "sans-serif"]
		},
		extend: {
			
		},
	},
	plugins: [],
};
