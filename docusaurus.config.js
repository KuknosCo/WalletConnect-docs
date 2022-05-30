// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Kuknos WalletConnect Docs",
  tagline:
    "WalletConnect is an open protocol to communicate securely between Dapps and Wallets.",
  url: "https://docs.walletconnect.com/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "Kuknos walletconnect",
  projectName: "Kuknos walletconnect-docs",

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          breadcrumbs: false,
          lastVersion: "1.0",
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/KuknosCo/WalletConnect-docs",
          versions: {
            current: {
              badge: false,
              label: "1.0",
              path: "1.0",
            },
          },
          remarkPlugins: [
            [require("@docusaurus/remark-plugin-npm2yarn"), { sync: true }],
          ],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      navbar: {
        title: "Kuknos WalletConnect",
        logo: {
          alt: "Kuknos WalletConnect Logo",
          src: "img/kuknos-logo.png",
        },
        items: [

        ],
      },
      footer: {
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()} Kuknos WalletConnect, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["swift", "kotlin"],
      },
      algolia: {
        appId: "KEO8ND6AUT",
        apiKey: "5921626237dc9040afc258af25d4e77d",
        indexName: "walletconnect",
        contextualSearch: true,
      },
    },
};

module.exports = config;