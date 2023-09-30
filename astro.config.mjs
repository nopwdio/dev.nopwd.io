import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '<nopwd-dev/>',
			customCss: [
				'./src/styles/custom.css',
			],			
			social: {
				github: 'https://github.com/nopwdio',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Get started', link: '/guides' },
						{ label: 'Auth with Email link', link: '/guides/email' },
						{ label: 'Auth with Passkey', link: '/guides/passkeys' },
						{ label: 'Verifying token', link: '/guides/tokens' },
						{ label: 'Customization', link: '/guides/customization' },
					],
				},
				{
					label: 'Reference',
					items: [
						{ label: 'API', 
						items: [
							{ label: 'Nopwd rest API', link: '/reference/api' },
							{ label: 'token endpoints', link: '/reference/api/token' },
						]
						},
						
					],
				},
			],
		}),
	],
});
