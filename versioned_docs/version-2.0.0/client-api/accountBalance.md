# Account Balance


### Example

<div >

``` javascript

  try {
    const response = await wallet.getAccountBalance('GDWNW72K5RSW77JTCPADH5EYL2VT4FLUNN43CLIXKEGORT7YO5JDLHLK') 
    if(response.status === 'reject'){
        throw new Error(response.message)
    }
    console.log(response.data) // Balances of your account
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
    <td>public</td>
    <td>string</td>
    <td>Account id</td>
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
    <td>actionType.accountBalance</td>
    <td></td>
  </tr>
  <tr>
    <td>message</td>
    <td>string</td>
    <td></td>
  </tr>
  <tr>
    <td>data</td>
    <td>accountBlancesResponse</td>
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
          <td>balances</td>
          <td>Array of Balance</td>
          <td> 
            <table>
              <tr>
                <th>Name</th>
                <th>Type</th>
              </tr>
              <tr>
                <td>asset_code</td>
                <td>string</td>
              </tr>
              <tr>
                <td>asset_issuer</td>
                <td>string</td>
              </tr>
              <tr>
                <td>available_balance</td>
                <td>number</td>
              </tr>
              <tr>
                <td>balance</td>
                <td>number</td>
              </tr>
              <tr>
                <td>buying_liabilites</td>
                <td>string</td>
              </tr>
              <tr>
                <td>selling_liabilites</td>
                <td>string</td>
              </tr>
              <tr>
                <td>limit</td>
                <td>string</td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>