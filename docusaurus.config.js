/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Decoo Wiki',
  tagline: 'Decoo = Decentralized cloud storage',
  url: 'https://wiki.decoo.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'decooio', // Usually your GitHub org/user name.
  projectName: 'decoo-cn-wiki', // Usually your repo name.
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },
  themeConfig: {
    navbar: {
      title: 'wiki',
      logo: {
        alt: 'Decoo Logo',
        src: 'img/logo.svg',
      },
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    }

  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.

          editUrl: 'https://github.com/decooio/decoo-cn-wiki/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/decooio/decoo-cn-wiki/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
