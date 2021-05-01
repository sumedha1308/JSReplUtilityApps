const readLineSync = require('readline-sync');

const urlEncoder = (url) => encodeURIComponent(url);

const urlDecoder = (url) => decodeURIComponent(url);

const selectedUtilityOption = parseInt(readLineSync.question('Welcome to URL Encoder/Decoder. Which utility function would you like to use?\n1. urlEncode\n2. urlDecode\n'));

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