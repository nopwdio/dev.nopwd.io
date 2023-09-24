import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '<dev/>',
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/custom.css',
			],			
			social: {
				github: 'https://github.com/nopwdio',
				x: 'https://twitter.com/adrienforward',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Get started', link: '/guides/getstarted' },
						{ label: 'Email link authentication', link: '/guides/email' },
						{ label: 'Passkey authentication', link: '/guides/passkeys' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
