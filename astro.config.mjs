import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Nopwd doc',
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
					autogenerate: { directory: 'reference' },
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
		}),
	],
});
