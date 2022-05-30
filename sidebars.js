// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

module.exports = {
  mainSidebar: [
    'readme',
    {
      type: 'category',
      label: 'Quick Start',
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Dapps',
          collapsible: true,
          collapsed: false,
          items: [
            {
              type: 'autogenerated',
              dirName: 'quick-start/dapps'
            }
          ]
        }
      ]
    },
    "tech-spec",
    {
      "type": "category",
      "label": "Client Api",
      "items": [
        "client-api/connect",
        "client-api/disconnect",
        "client-api/walletConnectStatus",
        "client-api/setNetwork",
        "client-api/createKeypair",
        "client-api/accountBalance",
        "client-api/payment",
        "client-api/signXdr",
        "client-api/signData",
        "client-api/curveEncryption",
        "client-api/curveDecryption",

      ],
      "collapsible": true,
      "collapsed": true
    }
  ]
}