# Curve Encryption

Encrypt data with kuknos public key.


### Example

<div >

``` javascript
  try {
        const response = await wallet.curveEncrypt({
            data: 'plain text',
            public: 'GDWNW72K5RSW77JTCPADH5EYL2VT4FLUNN43CLIXKEGORT7YO5JDLHLK'
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
    <td>curveEncryptRequest</td>
    <td>
      <table>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>data</td>
          <td>string</td>
          <td>plain Text data</td>
        </tr>
        <tr>
          <td>public</td>
          <td>string</td>
          <td>Public key that you want to encrypted data with it</td>
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
    <td>actionType.curveEncrypt</td>
    <td></td>
  </tr>
  <tr>
    <td>message</td>
    <td>string</td>
    <td></td>
  </tr>
  <tr>
    <td>data</td>
    <td>curveEncryptResponse</td>
    <td> 
     <table >
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>ciphertext</td>
            <td>string</td>
            <td>Encrypted Data</td>
        </tr>
      </table>
    </td>
  </tr>
</table>