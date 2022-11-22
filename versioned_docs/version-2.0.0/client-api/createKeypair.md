# Create Keypair

Generate mnemonic backup words<br/>
Mnemonic and Secret of the keypair will be safe and do not return to the DApp.

#### Example

<div >

``` javascript

  try {
    const response = await wallet.createKeypair() 
    if(response.status === 'reject'){
        throw new Error(response.message)
    }
    console.log(response.data)
  } catch (error) {
      console.log(error)
  }

```
</div>




#### Return 


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
    <td>actionType.createKeypair</td>
    <td></td>
  </tr>
  <tr>
    <td>message</td>
    <td>string</td>
    <td></td>
  </tr>
  <tr>
    <td>data</td>
    <td>createKeypairResponse</td>
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
      </table>
    </td>
  </tr>
</table>