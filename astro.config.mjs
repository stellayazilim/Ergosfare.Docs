// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';

import markdoc from '@astrojs/markdoc';

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
		
		components: {
        Sidebar: "./src/components/Navigation.astro",
        PageFrame: "./src/components/PageFrame.astro",
        Header: "./src/components/Header.astro",
        ContentPanel: "./src/components/ContentPanel.astro",
        TwoColumnContent: "./src/components/TwoColumnContent.astro"
		},
		title: 'My Docs',
		social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
		sidebar: [
        {	
            label: 'Guides',
            items: [
                // Each item here is one entry in the navigation menu.
                { label: 'Example Guide', slug: 'guides/example' },
            ],
        },
        {
            label: 'Reference',
            autogenerate: { directory: 'reference' },
        },
		],
		customCss: [
        './src/styles/global.css'
		]
}), markdoc()],

  vite: {
    plugins: [tailwindcss()],
  },
});