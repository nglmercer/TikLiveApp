// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TikWAP docs',
  tagline: 'Web en construccion',
  favicon: 'img/favicon.ico',

  // Establece aquí la URL de producción de tu sitio
  url: 'https://nglmercer.github.io/',
  // Establece la ruta /<baseUrl>/ bajo la cual se sirve tu sitio
  // Para despliegue en GitHub Pages, suele ser '/<nombreProyecto>/'
  baseUrl: '/TikLiveApp-DOCS',
  //https://github.com/nglmercer/TikLiveApp-DOCS
  // Configuración para despliegue en GitHub Pages.
  // Si no estás utilizando GitHub Pages, no necesitas esto.
  organizationName: 'nglmercer', // Por lo general, tu nombre de usuario u organización de GitHub.
  projectName: 'TikLiveApp-DOCS', // Por lo general, el nombre de tu repositorio.
  deploymentBranch: 'gh-pages',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  // Aunque no utilices internacionalización, puedes usar este campo para definir
  // metadatos útiles como el idioma HTML. Por ejemplo, si tu sitio está en chino,
  // puedes reemplazar "en" por "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'APP docs',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Comunidad',
            items: [
              {
                label: 'tiktok',
                href: 'https://www.tiktok.com/@melserng',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/kqj7Ev3Uzr',
              },
              {
                label: 'github',
                href: 'https://github.com/nglmercer',
              },
            ],
          },
          {
            title: 'Mas',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/nglmercer',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} TiktokLiveWebApp. by melser.`,
      },
      prism: {
        theme: prismThemes.oceanicNext,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
