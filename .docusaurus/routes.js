
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/WalletConnect-docs/blog/archive',
    component: ComponentCreator('/WalletConnect-docs/blog/archive','100'),
    exact: true
  },
  {
    path: '/WalletConnect-docs/search',
    component: ComponentCreator('/WalletConnect-docs/search','7dc'),
    exact: true
  },
  {
    path: '/WalletConnect-docs/1.0',
    component: ComponentCreator('/WalletConnect-docs/1.0','8ba'),
    routes: [
      {
        path: '/WalletConnect-docs/1.0/',
        component: ComponentCreator('/WalletConnect-docs/1.0/','b35'),
        exact: true,
        'sidebar': "version-1.0/mainSidebar"
      },
      {
        path: '/WalletConnect-docs/1.0/client-api/accountBalance',
        component: ComponentCreator('/WalletConnect-docs/1.0/client-api/accountBalance','f96'),
        exact: true,
        'sidebar': "version-1.0/mainSidebar"
      },
      {
        path: '/WalletConnect-docs/1.0/client-api/changeTrust',
        component: ComponentCreator('/WalletConnect-docs/1.0/client-api/changeTrust','012'),
        exact: true
      },
      {
        path: '/WalletConnect-docs/1.0/client-api/connect',
        component: ComponentCreator('/WalletConnect-docs/1.0/client-api/connect','43e'),
        exact: true,
        'sidebar': "version-1.0/mainSidebar"
      },
      {
        path: '/WalletConnect-docs/1.0/client-api/createKeypair',
        component: ComponentCreator('/WalletConnect-docs/1.0/client-api/createKeypair','4fc'),
        exact: true,
        'sidebar': "version-1.0/mainSidebar"
      },
      {
        path: '/WalletConnect-docs/1.0/client-api/curveDecryption',
        component: ComponentCreator('/WalletConnect-docs/1.0/client-api/curveDecryption','dc4'),
        exact: true,
        'sidebar': "version-1.0/mainSidebar"
      },
      {
        path: '/WalletConnect-docs/1.0/client-api/curveEncryption',
        component: ComponentCreator('/WalletConnect-docs/1.0/client-api/curveEncryption','09c'),
        exact: true,
        'sidebar': "version-1.0/mainSidebar"
      },
      {
        path: '/WalletConnect-docs/1.0/client-api/disconnect',
        component: ComponentCreator('/WalletConnect-docs/1.0/client-api/disconnect','008'),
        exact: true,
        'sidebar': "version-1.0/mainSidebar"
      },
      {
        path: '/WalletConnect-docs/1.0/client-api/payment',
        component: ComponentCreator('/WalletConnect-docs/1.0/client-api/payment','602'),
        exact: true,
        'sidebar': "version-1.0/mainSidebar"
      },
      {
        path: '/WalletConnect-docs/1.0/client-api/setNetwork',
        component: ComponentCreator('/WalletConnect-docs/1.0/client-api/setNetwork','13a'),
        exact: true,
        'sidebar': "version-1.0/mainSidebar"
      },
      {
        path: '/WalletConnect-docs/1.0/client-api/signData',
        component: ComponentCreator('/WalletConnect-docs/1.0/client-api/signData','1ce'),
        exact: true,
        'sidebar': "version-1.0/mainSidebar"
      },
      {
        path: '/WalletConnect-docs/1.0/client-api/signXdr',
        component: ComponentCreator('/WalletConnect-docs/1.0/client-api/signXdr','b91'),
        exact: true,
        'sidebar': "version-1.0/mainSidebar"
      },
      {
        path: '/WalletConnect-docs/1.0/client-api/walletConnectStatus',
        component: ComponentCreator('/WalletConnect-docs/1.0/client-api/walletConnectStatus','f89'),
        exact: true,
        'sidebar': "version-1.0/mainSidebar"
      },
      {
        path: '/WalletConnect-docs/1.0/quick-start/dapps/client',
        component: ComponentCreator('/WalletConnect-docs/1.0/quick-start/dapps/client','735'),
        exact: true,
        'sidebar': "version-1.0/mainSidebar"
      },
      {
        path: '/WalletConnect-docs/1.0/tech-spec',
        component: ComponentCreator('/WalletConnect-docs/1.0/tech-spec','30a'),
        exact: true,
        'sidebar': "version-1.0/mainSidebar"
      }
    ]
  },
  {
    path: '/WalletConnect-docs/2.0.0',
    component: ComponentCreator('/WalletConnect-docs/2.0.0','623'),
    routes: [
      {
        path: '/WalletConnect-docs/2.0.0/',
        component: ComponentCreator('/WalletConnect-docs/2.0.0/','5fa'),
        exact: true,
        'sidebar': "mainSidebar"
      },
      {
        path: '/WalletConnect-docs/2.0.0/client-api/accountBalance',
        component: ComponentCreator('/WalletConnect-docs/2.0.0/client-api/accountBalance','a3d'),
        exact: true,
        'sidebar': "mainSidebar"
      },
      {
        path: '/WalletConnect-docs/2.0.0/client-api/changeTrust',
        component: ComponentCreator('/WalletConnect-docs/2.0.0/client-api/changeTrust','a34'),
        exact: true
      },
      {
        path: '/WalletConnect-docs/2.0.0/client-api/connect',
        component: ComponentCreator('/WalletConnect-docs/2.0.0/client-api/connect','2b6'),
        exact: true,
        'sidebar': "mainSidebar"
      },
      {
        path: '/WalletConnect-docs/2.0.0/client-api/createKeypair',
        component: ComponentCreator('/WalletConnect-docs/2.0.0/client-api/createKeypair','826'),
        exact: true,
        'sidebar': "mainSidebar"
      },
      {
        path: '/WalletConnect-docs/2.0.0/client-api/curveDecryption',
        component: ComponentCreator('/WalletConnect-docs/2.0.0/client-api/curveDecryption','87b'),
        exact: true,
        'sidebar': "mainSidebar"
      },
      {
        path: '/WalletConnect-docs/2.0.0/client-api/curveEncryption',
        component: ComponentCreator('/WalletConnect-docs/2.0.0/client-api/curveEncryption','a1a'),
        exact: true,
        'sidebar': "mainSidebar"
      },
      {
        path: '/WalletConnect-docs/2.0.0/client-api/disconnect',
        component: ComponentCreator('/WalletConnect-docs/2.0.0/client-api/disconnect','c5a'),
        exact: true,
        'sidebar': "mainSidebar"
      },
      {
        path: '/WalletConnect-docs/2.0.0/client-api/payment',
        component: ComponentCreator('/WalletConnect-docs/2.0.0/client-api/payment','01a'),
        exact: true,
        'sidebar': "mainSidebar"
      },
      {
        path: '/WalletConnect-docs/2.0.0/client-api/setNetwork',
        component: ComponentCreator('/WalletConnect-docs/2.0.0/client-api/setNetwork','758'),
        exact: true,
        'sidebar': "mainSidebar"
      },
      {
        path: '/WalletConnect-docs/2.0.0/client-api/signData',
        component: ComponentCreator('/WalletConnect-docs/2.0.0/client-api/signData','fbf'),
        exact: true,
        'sidebar': "mainSidebar"
      },
      {
        path: '/WalletConnect-docs/2.0.0/client-api/signXdr',
        component: ComponentCreator('/WalletConnect-docs/2.0.0/client-api/signXdr','4e4'),
        exact: true,
        'sidebar': "mainSidebar"
      },
      {
        path: '/WalletConnect-docs/2.0.0/client-api/walletConnectStatus',
        component: ComponentCreator('/WalletConnect-docs/2.0.0/client-api/walletConnectStatus','ee9'),
        exact: true,
        'sidebar': "mainSidebar"
      },
      {
        path: '/WalletConnect-docs/2.0.0/quick-start/dapps/client',
        component: ComponentCreator('/WalletConnect-docs/2.0.0/quick-start/dapps/client','de8'),
        exact: true,
        'sidebar': "mainSidebar"
      },
      {
        path: '/WalletConnect-docs/2.0.0/tech-spec',
        component: ComponentCreator('/WalletConnect-docs/2.0.0/tech-spec','ece'),
        exact: true,
        'sidebar': "mainSidebar"
      }
    ]
  },
  {
    path: '/WalletConnect-docs/',
    component: ComponentCreator('/WalletConnect-docs/','7d3'),
    routes: [
      {
        path: '/WalletConnect-docs/',
        component: ComponentCreator('/WalletConnect-docs/','6ba'),
        exact: true,
        'sidebar': "mainSidebar"
      },
      {
        path: '/WalletConnect-docs/client-api/accountBalance',
        component: ComponentCreator('/WalletConnect-docs/client-api/accountBalance','f64'),
        exact: true,
        'sidebar': "mainSidebar"
      },
      {
        path: '/WalletConnect-docs/client-api/changeTrust',
        component: ComponentCreator('/WalletConnect-docs/client-api/changeTrust','ad6'),
        exact: true
      },
      {
        path: '/WalletConnect-docs/client-api/connect',
        component: ComponentCreator('/WalletConnect-docs/client-api/connect','648'),
        exact: true,
        'sidebar': "mainSidebar"
      },
      {
        path: '/WalletConnect-docs/client-api/createKeypair',
        component: ComponentCreator('/WalletConnect-docs/client-api/createKeypair','a5d'),
        exact: true,
        'sidebar': "mainSidebar"
      },
      {
        path: '/WalletConnect-docs/client-api/curveDecryption',
        component: ComponentCreator('/WalletConnect-docs/client-api/curveDecryption','dd4'),
        exact: true,
        'sidebar': "mainSidebar"
      },
      {
        path: '/WalletConnect-docs/client-api/curveEncryption',
        component: ComponentCreator('/WalletConnect-docs/client-api/curveEncryption','7b2'),
        exact: true,
        'sidebar': "mainSidebar"
      },
      {
        path: '/WalletConnect-docs/client-api/disconnect',
        component: ComponentCreator('/WalletConnect-docs/client-api/disconnect','4dc'),
        exact: true,
        'sidebar': "mainSidebar"
      },
      {
        path: '/WalletConnect-docs/client-api/payment',
        component: ComponentCreator('/WalletConnect-docs/client-api/payment','3a6'),
        exact: true,
        'sidebar': "mainSidebar"
      },
      {
        path: '/WalletConnect-docs/client-api/setNetwork',
        component: ComponentCreator('/WalletConnect-docs/client-api/setNetwork','9e3'),
        exact: true,
        'sidebar': "mainSidebar"
      },
      {
        path: '/WalletConnect-docs/client-api/signData',
        component: ComponentCreator('/WalletConnect-docs/client-api/signData','f77'),
        exact: true,
        'sidebar': "mainSidebar"
      },
      {
        path: '/WalletConnect-docs/client-api/signXdr',
        component: ComponentCreator('/WalletConnect-docs/client-api/signXdr','5b1'),
        exact: true,
        'sidebar': "mainSidebar"
      },
      {
        path: '/WalletConnect-docs/client-api/walletConnectStatus',
        component: ComponentCreator('/WalletConnect-docs/client-api/walletConnectStatus','4fa'),
        exact: true,
        'sidebar': "mainSidebar"
      },
      {
        path: '/WalletConnect-docs/quick-start/dapps/client',
        component: ComponentCreator('/WalletConnect-docs/quick-start/dapps/client','a17'),
        exact: true,
        'sidebar': "mainSidebar"
      },
      {
        path: '/WalletConnect-docs/tech-spec',
        component: ComponentCreator('/WalletConnect-docs/tech-spec','7a3'),
        exact: true,
        'sidebar': "mainSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
