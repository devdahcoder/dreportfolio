/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],

	theme: {
		fontFamily: {
			cabinetgrotesk: ["CabinetGrotesk", "sans-serif"],
			inter: ["Inter", "sans-serif"],
		},
		extend: {
			animation: {
				"spin-slow": "spin 15s linear infinite",
				blinker: "blinker 600ms linear infinite",
				"slow-bounce": "slow-bounce 2s linear infinite",
			},
			keyframes: {
				"spin-slow": {
					"0%": { transform: "rotate(0deg)" },
					"100%": { transform: "rotate(360deg)" },
				},
				blinker: {
					"50%": { opacity: "0.6" },
				},
				"slow-bounce": {
					"0% 100%": { transform: "translateY(0)" },
					// '30%': { transform: 'translateY(-20px)'},
					"50%": { transform: "translateY(-100px)" },
				},
			},
		},
	},
	plugins: [],
};
