const readLineSync=require('readline-sync');
const crypto = require('crypto');

const urlHashing = (algo,str) => crypto.createHash(algo).update(str).digest('hex');

const selectedUtilityOption = parseInt(readLineSync.question('Welcome to String hashing. Which utility function would you like to use?\n1. md5\n2. sha-1\n3. sha-256\n4. sha-512\n'));

console.log(`You selected ${selectedUtilityOption}`);

switch(selectedUtilityOption) {
  case 1:
    const urlToHash = readLineSync.question('Please enter the string for md5 hashing\n');
    console.log('Hashed string is : '+urlHashing('md5',urlToHash));
    break;
  case 2:
    const urlToSha1Hash = readLineSync.question('Please enter the string for sha1 hashing\n');
    console.log('Hashed string is : '+urlHashing('sha1',urlToSha1Hash));
    break;
  case 3:
    const urlToSha256Hash = readLineSync.question('Please enter the string for sha256 hashing\n');
    console.log('Hashed string is : '+urlHashing('sha256',urlToSha256Hash));
    break;
  case 4:
    const urlToSha512Hash = readLineSync.question('Please enter the string for sha-512 hashing\n');
    console.log('Hashed string is : '+urlHashing('sha512',urlToSha512Hash));
    break;
  default:
    console.log('Invalid URL\n');
    break;
}