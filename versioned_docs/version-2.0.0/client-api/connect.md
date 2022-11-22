# Connect

To connect to the wallet and receive the wallet's Publickey, you must call the connect method.
This method dose not receive any parameters is only for receiving the publickey and connecting to the wallet

![alt text](/img/connectModalv2.png)


### Example

``` javascript

    try {
        const response = await wallet.connect() 
        if(response.status === 'reject'){
            throw new Error(response.message)
        }
        console.log(response.data.public)  // Public key of connected wallet
    } catch (error) {
        console.log(error)
    }

```

### Return

<table >
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>status</td>
    <td>boolean</td>
    <td></td>
  </tr>
  <tr>
    <td>type</td>
    <td>actionType.getAccount</td>
    <td></td>
  </tr>
  <tr>
    <td>message</td>
    <td>string</td>
    <td></td>
  </tr>
  <tr>
    <td>data</td>
    <td>GetAccountResponse</td>
    <td> 
      <table>
        <tr>
          <th>Name</th>
          <th>Type</th>
        </tr>
        <tr>
          <td>public</td>
          <td>string</td>
        </tr>
      </table>
    </td>
  </tr>
</table>

