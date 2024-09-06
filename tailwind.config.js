/** @type {import('tailwindcss').Config} */
export default {
	content: ['./components/**/*.{js,vue,ts}', './layouts/**/*.vue', './pages/**/*.vue', './plugins/**/*.{js,ts}', './app.vue', './error.vue'],
	theme: {
		extend: {
			backgroundImage: {
				'login-bgs': "url('/assets/images/login-bg.jpg')",
			},
			colors: {
				'btn-bg': '#24ae7c',
				'input-bg': '#363a3d',
				'top-table-bg': '#0d0f10',
				'active-state-bg': '#0d2a1f',
				'pending-state-bg': '#152432',
				'canceled-state-bg': '#3e1716',
				'primary-text-color': '#ffffff',
				'secondary-text-color': '#abb8c4',
			},
		},
	},
	plugins: [],
};
