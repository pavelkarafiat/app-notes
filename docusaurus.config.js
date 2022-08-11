// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// https://ricard.dev/how-to-set-docs-as-homepage-for-docusaurus/


const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/*@type {import('@docusaurus/types').Config} */
const config = {
  title: 'Karafiat notes',
  tagline: 'make sence in chaos of data',
  url: 'url',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'karafiat', // Usually your GitHub org/user name.
  projectName: 'notes', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      /*'classic',*/
      '@docusaurus/preset-classic',
      /*@type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          /*sidebarPath: require.resolve('./sidebars.js'),*/
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          // blog: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Notes on different topics',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [/*
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Notes',
          },
        */],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
