module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				inter: ["'Inter'", "'sans-serif'"],
				mono: ["'Roboto Mono'", "'monospace'"],
			},
			boxShadow: {
				blueDrop: '0px 0px 10px rgba(0, 94, 255, 0.2);',
				'newsletter-shadow': '0px 0px 200px rgba(0, 94, 255, 0.25)',
			},
			colors: {
				'brand-primary': '#005EFF',
			},
			backgroundSize: {
				'size-200': '200% 200%',
				'size-120': '120% 120%',
			},
			backgroundPosition: {
				'pos-0': '0% 0%',
				'pos-100': '100% 100%',
			},
			keyframes: {
				slide: {
					'0%': { 'background-position': '0% 0%' },
					'100%': { 'background-position': '100% 100%' },
				},
				stroll: {
					'0%': { transform: 'translateX(0px)' },
					'50%': { transform: 'translateY(20px)' },
					'75%': { transform: 'translateY(50px)' },
					'100%': { transform: 'translateX(50px)' },
				},
			},
			animation: {
				slide: 'slide 5s ease-in-out infinite alternate',
				stroll: 'stroll 5s linear infinite alternate',
			},
		},
	},
	plugins: [],
};
