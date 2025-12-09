// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Physical AI & Humanoid Robotics',
  tagline: 'Comprehensive 13-Week Course for Industry Practitioners',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
url: 'https://naveed261.github.io',   // lowercase best practice
baseUrl: '/project-1/',               // MOST IMPORTANT FIX

  // GitHub pages deployment config.
  organizationName: 'NAVEED261', // Usually your GitHub org/user name.
  projectName: 'project-1', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

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
          editUrl: 'https://github.com/NAVEED261/project-1/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Physical AI & Humanoid Robotics',
        logo: {
          alt: 'Physical AI Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Textbook',
          },
          {
            href: 'https://github.com/NAVEED261/project-1',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              { label: 'Introduction', to: '/docs/intro' },
              { label: 'Setup Guides', to: '/docs/setup/workstation' },
            ],
          },
          {
            title: 'Resources',
            items: [
              { label: 'Glossary', to: '/docs/references/glossary' },
            ],
          },
          {
            title: 'More',
            items: [
              { label: 'GitHub', href: 'https://github.com/NAVEED261/project-1' },
              {
                label: 'Project Constitution',
                href: 'https://github.com/NAVEED261/project-1/blob/main/.specify/memory/constitution.md',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Physical AI & Humanoid Robotics Textbook. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['python', 'bash', 'yaml'],
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      algolia: {
        appId: 'YOUR_APP_ID',
        apiKey: 'YOUR_SEARCH_API_KEY',
        indexName: 'physical-ai-textbook',
        contextualSearch: true,
        searchParameters: {
          attributesToRetrieve: [
            'hierarchy',
            'content',
            'url',
            'week',
            'module',
            'capstone_component',
          ],
        },
        searchPagePath: 'search',
      },
      metadata: [
        { name: 'keywords', content: 'robotics, physical AI, humanoid robots, ROS 2, Isaac Sim, VLA' },
        { name: 'description', content: 'Comprehensive 13-week textbook for industry practitioners learning Physical AI and Humanoid Robotics' },
        { property: 'og:title', content: 'Physical AI & Humanoid Robotics Textbook' },
        { property: 'og:description', content: 'Master Physical AI, ROS 2, Digital Twins, and Humanoid Robotics in 13 weeks' },
        { property: 'og:type', content: 'website' },
      ],
    }),
};

export default config;
