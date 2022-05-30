---
description: Quick Start For Dapps using Standalone Client
---

# Standalone Client

This library is written in typescript language and can be used on the web

## Install

```bash npm2yarn
npm install --save @kuknos/wallet-connect
```

### Initiate Connection

``` javascript
    import {Client as walletConnect} from '@kuknos/wallet-connect' 
    const wallet = new walletConnect({  // Inital options
        relay_server_url: 'https://relay.kuknos.ir',
        network: walletConnect.network.public
    });
    const connectResponse = await wallet.connect();
    if(connectResponse.status === 'reject'){
        throw new Error('Connect Request Reject by Wallet')
    }
    console.log(connectResponse.data.public)  // PublicKey of connected wallet
    wallet.onConnectionStatusChange((status)=>{
         if(status){
            // Dapp is connected to the wallet
        }else{
            // Dapp is not connected to the wallet
        }
    });
```

### Payment
``` javascript
// Create payment transaction and submit on Kuknos network
const paymentResponse= await wallet.payment({
    amount : 1.25,
    destination: 'GDWNW72K5RSW77JTCPADH5EYL2VT4FLUNN43CLIXKEGORT7YO5JDLHLK',
    asset_code : 'PMN',
    memo : 'test'
})
if(paymentResponse.status === 'reject'){
    throw new Error(paymentResponse.message)
}
console.log(paymentResponse.data.hash)  // Transaction hash of this payment
```


### Sign XDR
``` javascript
// Sign custom XDR
const signResponse= await wallet.sign('custom xdr')
if(signResponse.status === 'reject'){
    throw new Error(paymentResponse.message)
}
console.log(paymentResponse.data.xdr)  // Signed XDR 
```