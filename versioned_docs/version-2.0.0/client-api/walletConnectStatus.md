# Connection Status

Return connection status.<br /><br />
Every second, walletConnect check connection beween DApp and connected Wallet and if wallet lock or disconnect from the internet, You will be informed by this method.


### Example
``` javascript
 wallet.onConnectionStatusChange((status)=>{
    if(status){
      // The wallet is available
    }else{
      // The wallet is not available
    }
  })
```