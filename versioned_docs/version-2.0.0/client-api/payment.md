# Payment

Sends an amount in a specific asset to a destination account.


### Example

<div >

``` javascript
  try {
    const response = await wallet.payment({
        amount : 1.25,
        destination: 'GDWNW72K5RSW77JTCPADH5EYL2VT4FLUNN43CLIXKEGORT7YO5JDLHLK',
        asset_code : 'PMN',
        memo : 'test'
    }) 
    if(response.status === 'reject'){
        throw new Error(response.message)
    }
    console.log(response.data)
  } catch (error) {
      console.log(error)
  }
```
</div>

### Params 

<table >
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>data</td>
    <td>paymentRequest</td>
    <td>
      <table>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>amount</td>
          <td>number</td>
          <td>The amount to send.</td>
        </tr>
        <tr>
          <td>destination</td>
          <td>string</td>
          <td>The destination account ID.</td>
        </tr>
        <tr>
          <td>memo</td>
          <td>string</td>
          <td>**optional**</td>
        </tr>
        <tr>
          <td>asset_code</td>
          <td>string</td>
          <td>The asset code to send.</td>
        </tr>
        <tr>
          <td>asset_issuer</td>
          <td>string</td>
          <td>**optional** The asset issuer code to send.</td>
        </tr>
        <tr>
          <td>network</td>
          <td>string</td>
          <td>**optional**  public | test</td>
        </tr>
      </table>
    </td>
  </tr>
</table>


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
    <td>actionType.payment</td>
    <td></td>
  </tr>
  <tr>
    <td>message</td>
    <td>string</td>
    <td></td>
  </tr>
  <tr>
    <td>data</td>
    <td>paymentResponse</td>
    <td> 
     <table >
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>public</td>
          <td>string</td>
          <td>The source account</td>
        </tr>
        <tr>
          <td>network</td>
          <td>Public | test</td>
          <td></td>
        </tr>
        <tr>
          <td>status</td>
          <td>string</td>
          <td>Status of operation</td>
        </tr>
        <tr>
          <td>transaction_hash</td>
          <td>string</td>
          <td></td>
        </tr>
      </table>
    </td>
  </tr>
</table>