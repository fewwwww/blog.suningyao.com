const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh'],
  },
  title: 'Blogs',
  tagline: 'by Suning Yao',
  url: 'https://fewwwww.github.io', // Your website URL
  baseUrl: '/',
  projectName: 'blog.suningyao.com',
  organizationName: 'fewwwww',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  themeConfig: {
    navbar: {
      title: 'blog.suningyao',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'docs',
        },
        {
          href: 'https://github.com/fewwwww/blog.suningyao.com',
          label: 'GitHub',
          position: 'right',
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
              label: 'About',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'WeChat',
              href: 'https://fewwwww.github.io/WeChat-AddMe/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Portfolio',
              to: 'https://suningyao.com',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/fewwwww',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Blog. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
