module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {},
		fontFamily: {
			sans: ['Mulish', 'sans-serif'],
		},
		backgroundImage: {
			'hero-pattern': "url('/assets/patterns/texture.svg')",
		},
	},
	plugins: [],
};
