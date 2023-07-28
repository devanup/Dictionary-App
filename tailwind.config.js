/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				primaryPurple: '#A445ED',
				searchFieldLightNormal: '#F4F4F4',
				searchFieldLightFilled: '#2D2D2D',
				darkModeToggleNormal: '#757575',
			},
			fontFamily: {
				sansSerifCustom: ['inter', 'sans-serif'],
				sansSerifCustomBold: ['inter-bold', 'sans-serif'],
				serifCustom: ['lora', 'serif'],
				serifCustomBold: ['lora-bold', 'serif'],
				monoCustom: ['inconsolata', 'monospace'],
				monoCustomBold: ['inconsolata-bold', 'monospace'],
			},
		},
	},
	plugins: [],
};
