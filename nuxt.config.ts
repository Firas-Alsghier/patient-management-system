// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	devtools: { enabled: true },
	app: {
		head: {
			title: 'Patient System',
			htmlAttrs: {
				style: 'box-sizing: border-box',
			},
			bodyAttrs: {
				style: 'background:#131619; min-height: 100vh; font-family: "Plus Jakarta Sans", sans-serif',
			},

			link: [
				{ rel: 'stylesheet', href: 'https://fonts.googleapis.com' },
				{ rel: 'stylesheet', href: 'https://fonts.gstatic.com" crossorigin' },
				{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap' },
				{
					rel: 'stylesheet',
					href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css',
					integrity: 'sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==',
					crossorigin: 'anonymous',
					referrerpolicy: 'no-referrer',
				},
			],
		},
	},
	components: [
		{
			path: '~/components',
			pathPrefix: false,
		},
	],
	css: ['~/assets/css/main.css'],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	modules: ['@pinia/nuxt'],
});
