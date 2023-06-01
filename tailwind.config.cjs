/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			'sm': {'min': '0px', 'max': '800px'},
			'md': {'min': '801px', 'max': '1023px'},
			'lg': '1024px'
		},
		extend: {
			colors: {
				'primary': {
					DEFAULT: '#ff8000',
					dark: '#1e1e1e'
				},
				'secondary': {
					DEFAULT: '#1e1e1e',
					dark: '#ff8000'
				},
				'accent': {
					DEFAULT: '#afb3a8',
				}
			}
		},
		fontFamily: {
			proza: ['Proza Libre', 'sans-serif'],
			taviraj: ['Taviraj', 'serif'],
			telex: ['Telex', 'sans-serif']
		}
	},
	plugins: [],
}
