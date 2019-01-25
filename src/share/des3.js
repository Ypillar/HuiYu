import CryptoJS from 'crypto-js' // https://www.npmjs.com/package/crypto-js
import { Base64 } from 'js-base64';


let key = CryptoJS.enc.Utf8.parse(cfg.cryptoKey);
export default{
  decrypt:(cipherText)=>{
    let bytes  = CryptoJS.TripleDES.decrypt(
      Base64.decode(cipherText), 
      key,
      {    
        // iv: 		crypto_iv,    
        mode: 		CryptoJS.mode.ECB,    
        padding: 	CryptoJS.pad.Pkcs7
      });
    return bytes.toString(CryptoJS.enc.Utf8);
  },
  encrypt:(text)=>{
    let ciphertext = CryptoJS.TripleDES.encrypt(text,
      key,
      {
        mode: 		CryptoJS.mode.ECB,    
        padding: 	CryptoJS.pad.Pkcs7
      });
    return Base64.encode(ciphertext.toString());
  }
}