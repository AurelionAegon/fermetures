const colors = require('tailwindcss/colors')


module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {	
		extend: {
			colors: {
				'milky-way': '#f8f8fb',
				'tangerine': '#ff6a3d',
				'midnight': '#1a2238',
				'twilight': '#29375b',
				'daffodil': '#f9db6d',
				'lavender': '#9daaf2',
				'iris': '#3b4ca8',
				'my_gray':'#abb8c3',
			},
		},
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
	plugins: [
	]
};
