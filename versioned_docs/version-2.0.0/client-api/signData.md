# Sign Data



### Example

<div >

``` javascript
  try {
    const response = await wallet.signData('data') 
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
    <td>string</td>
    <td>Data to sign</td>
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
    <td>actionType.signData</td>
    <td></td>
  </tr>
  <tr>
    <td>message</td>
    <td>string</td>
    <td></td>
  </tr>
  <tr>
    <td>data</td>
    <td>SignDataResponse</td>
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
          <td>Signature</td>
          <td>string</td>
          <td>Signature</td>
        </tr>
      </table>
    </td>
  </tr>
</table>