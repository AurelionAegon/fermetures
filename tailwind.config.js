module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {},
		keyframes: {
			wiggle: {
			  '0%, 100%': { transform: 'rotate(-5deg)' },
			  '50%': { transform: 'rotate(5deg)' },
			},
		 },
		  animation:{
		  'spin': 'spin 3s linear infinite',
		  'wiggle': 'wiggle 2s linear infinite'
		},
		fontFamily: {
			sans: ['Mulish', 'sans-serif'],
		},
		backgroundImage: {
			'hero-pattern': "url('/assets/patterns/texture.svg')",
		},
	},
	plugins: []
};
