const urlEncoder = (url) => Buffer.from(url).toString('base64');

const urlDecoder = (url) => Buffer.from(url, 'base64').toString('ascii');

const readLineSync = require('readline-sync');

const selectedUtilityOption = parseInt(readLineSync.question('Welcome to Base64 Encoding/Decoding. Which utility function would you like to use?\n1. urlEncode\n2. urlDecode\n'));

console.log(`You selected ${selectedUtilityOption}`);

switch(selectedUtilityOption) {
  case 1:
    const urlToEncode = readLineSync.question('Please enter the url to be encoded\n');
    const encodedURL = urlEncoder(urlToEncode);
    console.log('\nEncoded URL is : '+encodedURL);
    break;
  case 2:
    const urlToDecode = readLineSync.question('Please enter the url to be decoded\n');
    const decodedURL = urlDecoder(urlToDecode);
    console.log('\nDecoded URL is : '+decodedURL);
    break;
  default:
    console.log('Invalid URL\n');
    break;
}