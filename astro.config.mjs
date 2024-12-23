import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://dev.nopwd.io',
	integrations: [
		starlight({
			title: 'dev',
			logo: {
				light: './src/assets/light.svg',
				dark: './src/assets/dark.svg',
			},

			customCss: [
				'./src/styles/custom.css',
			],			
			social: {
				github: 'https://github.com/nopwdio',
			},
			editLink: {
				baseUrl: 'https://github.com/nopwdio/dev.nopwd.io/edit/main/',
			},
			lastUpdated: true,
			sidebar: [
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Reference',
					items: [
						{
							label: 'Components', 
							autogenerate: { directory: 'reference/components' },
						},						
						{
							label: 'API', 
							autogenerate: { directory: 'reference/api' },
						},
					],
				},
			],
			head: [
				{
					tag: 'meta',
					attrs:{
						property: 'og:image',
						content: 'https://dev.nopwd.io/og.png',
					},
				},
				{
					tag: 'script',
					attrs: {
						src: 'https://cdn.jsdelivr.net/npm/@nopwdio/sdk-js@latest/cdn/components/np-status.js',
						type: "module"
					},
				},
				{
					tag: 'script',
					attrs: {
						src: 'https://cdn.jsdelivr.net/npm/@nopwdio/sdk-js@latest/cdn/components/np-login.js',
						type: "module"
					},
				},
				{
					tag: 'script',
					attrs: {
						src: 'https://cdn.jsdelivr.net/npm/@nopwdio/sdk-js@latest/cdn/components/np-logout.js',
						type: "module"
					},
				},
				{
					tag: 'script',
					attrs: {
						src: 'https://cdn.jsdelivr.net/npm/@nopwdio/sdk-js@latest/cdn/components/np-passkey-register.js',
						type: "module"
					},
				},

			],
		}),
		
	],
});
