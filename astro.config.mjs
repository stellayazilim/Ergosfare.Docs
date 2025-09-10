// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';

import markdoc from '@astrojs/markdoc';

// https://astro.build/config
export default defineConfig({
    outDir: "docs",
    site: "stellayazilim.github.io/ergosfare.docs",
    integrations: [starlight({
        
        logo: { src: "./src/assets/ergosfare.svg", replacesTitle: true},
        favicon: "./src/assets/favicon.png",
		components: {
            Sidebar: "./src/components/Navigation.astro",
            PageFrame: "./src/components/PageFrame.astro",
            Header: "./src/components/Header.astro",
            ContentPanel: "./src/components/ContentPanel.astro",
            TwoColumnContent: "./src/components/TwoColumnContent.astro",
            Pagination: "./src/components/Pagination.astro",
		},
		title: 'Ergosfare',
		social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/stellayazilim/ergosfare' }],
		sidebar: [
            { 
                label: "Getting-started",  
                translations: { tr: "Başlarken" },
                items: [
                    { label: "Introduction", slug: "getting-started/introduction", translations: { tr: "Giriş"} },
                    { label: "Installation", slug: "getting-started/installation", translations: { tr: "Kurulum"} },
                    { label: "Configuring Ergosfare", slug: "getting-started/configuring", translations: { tr:"Ergosfareyi yapılandırma"} }],           
            },
            {
                label: "Core-concepts", translations:{ tr: "Temel Kavramlar"}, items: [
                    { label: "Polymorhism", slug: "core-concepts/polymorphism", translations: {"tr": "Çok biçimlilik"}},
                    { label: "Interceptors", slug: "core-concepts/interceptors", translations: { tr: "Önleyiciler"}},
                    { label: "plugins", slug: "core-concepts/plugins", translations: { tr: "Eklentiler"}},
                    { label: "Execution Context", slug: "core-concepts/execution-context", translations: { tr: "Bağlam (Execution Context)"}}
                ]
            },
            {
                label: "Core Components", translations: { tr: "Temel Bileşenler"},
                items: [
                    { label: "Modules and Extensions", slug: "core-components/modules-extensions", translations: { tr: "Modüller ve Uzantılar"}},
                    { label: "Command Module", translations: { tr: "Komut Modülü"},  items: [
                        { label: "defining command", slug: "core-components/command/command-definition", translations: { tr: "Komut Tanımlama"}},
                        { label: "defining command-handler", slug: "core-components/command/command-handler", translations: { tr: "Komut İşleyici Tanımlama"}}
                    ]},
                    { label: "Query Module", translations: { tr: "Sorgu Modülü" }, items: [
                        { label: "defining query", slug: "core-components/query/query-definition", translations: { tr: "Sorgu Tanımlama"}},
                        { label: "defining query-handler", slug: "core-components/query/query-handler", translations: { tr: "Sorgu İşleyici Tanımlama"}}
                    ]},
                    { label: "Event Module", translations: {tr:"Olay Modülü"}, items: [
                        { label: "defining event", slug: "core-components/event/event-definition", translations: {tr: "Olay Tanımlama"}},
                        { label: "defining event-handler", slug: "core-components/event/event-handler", translations: { tr: "Olay İşleyici Tanımlama"}}
                    ]} 
                ]
            },
            { label: "Cross-cutting concerns", items: [
                { label: "Pre-interceptors", slug: "cross-cutting-concerns/pre-interceptors" , translations: { tr: "On-Önleyiciler (Pre-Interceptors)"}},
                { label: "Post-interceptors", slug: "cross-cutting-concerns/post-interceptors", translations: { tr: "Son-Önleyiciler (Post-Interceptors)"}},
                { label: "Exception-Interceptors", slug: "cross-cutting-concerns/exception-interceptors", translations: { tr: "Hata-Önleyiciler (Exception-interceptors)"}},
            ]}
      
		],
		customCss: [
        './src/styles/global.css'
		],

        defaultLocale: 'root',
        locales: {
            root: {
                label: 'English',
                lang: 'en', // lang is required for root locales
            },
            tr: {
                label: "Türkçe",
                lang: 'tr'
            }
        }
}), markdoc()],

  vite: {
    plugins: [tailwindcss()],
  },
});