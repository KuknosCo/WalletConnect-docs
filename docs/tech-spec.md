# Technical Specification

## Introduction

WalletConnect is an open protocol for connecting Dapps to Wallets. The motivation behind it came from the lack of user-friendly Wallets available to the user - In particular solutions which don't require installing browser extensions. In order to solve this it was designed to not require any additional software or hardware to connect a Wallet to a Dapp. The design is mostly tailored to mobile wallets but it could definitely support desktop wallets as well. The protocol relies that both the Dapp and the Wallet use WalletConnect Client and connect to a Bridge server that will relay the communications. The communication is initiated with a standard URI format that contains the topic of the connection request, a symmetric key is then used to decrypt the payload and the bridge server url.

## Core Architecture

The architecture consists essentially of a websocket server (Bridge) between two peers (Dapp and Wallet) that use the Client.

### Requesting Connection

The initiator, is the first peer who requests connection (Dapp). Dapp posts a  connection request details to the Bridge Server. Then using the WalletConnect URI, Dapp assembles together the required parameters to establish the connection.

```
wc-kuknos://Base64 encoded string
```

<table>
  <tr>
    <th>Required parts</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>wc-kuknos</td>
    <td>Kuknos Wallet Connect protocol</td>
  </tr>
  <tr>
    <td>Base64 encoded string</td>
    <td> 
    Base64 encoded of Dapp information 
     <table >
        <tr>
          <th>Name</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>project_id</td>
          <td>Unique id</td>
        </tr>
        <tr>
          <td>meta</td>
          <td>title, logo, Dapp url</td>
          <td></td>
        </tr>
      </table>
    </td>
  </tr>
</table>


<br />
<br />


### Establishing Connection

<br />
<br />

![alt text](/img/establishConnection.png)

The second peer (Wallet) will read the URI using either a QR Code or a deep link. After reading the URI the peer will immediately receive the connection request payload.

The Wallet will then display to the user request details provided by the Dapp. The user will then approve or reject the connection. If rejected, the Dapp will  throw an error message if provided by the Wallet. If approved, the Dapp will receive PublicKey from the Wallet.

Once the connection is established, the Dapp will be able to send any requests to be handled by the Wallet either to read data from its node or make signing requests for transactions or messages.

<br />

![alt text](/img/postCall.png)