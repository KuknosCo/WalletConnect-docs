# Sign XDR

Sign custome XDR

### Example

<div >

``` javascript
  try {
    const response = await wallet.signXdr('xdr') 
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
    <td>xdr</td>
    <td>string</td>
    <td>The transaction base64 encoded string</td>
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
    <td>actionType.signXdr</td>
    <td></td>
  </tr>
  <tr>
    <td>message</td>
    <td>string</td>
    <td></td>
  </tr>
  <tr>
    <td>data</td>
    <td>signXdrResponse</td>
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
        <td>xdr</td>
        <td>string</td>
        <td>Signed xdr</td>
      </tr>
      <tr>
        <td>network</td>
        <td>Public | test</td>
        <td></td>
      </tr>
    </table>
    </td>
  </tr>
</table>