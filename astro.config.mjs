import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '',
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
						{ label: 'Components', 
						items: [
							{ label: '<np-email-login>', link: '/reference/components/np-email-signin' },
						]
						},						
						{ label: 'API', 
						items: [
							{ label: 'Nopwd rest API', link: '/reference/api' },
							{ label: 'token endpoints', link: '/reference/api/token' },
							{ label: 'JWKS endpoints', link: '/reference/api/jwks' },
						]
						},
					],
				},
			],
		}),
	],
});
