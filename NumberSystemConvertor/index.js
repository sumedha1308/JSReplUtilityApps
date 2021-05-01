const readLineSync = require('readline-sync');

const binaryToDecimal = (num) => {
  return parseInt(num, 2).toString(10);
}
const binaryToHex = (num) => {
  return parseInt(num, 2).toString(16);
}
const binaryToOct = (num) => {
  return parseInt(num, 2).toString(8);
}
const decTobinary = (num) => {
  return parseInt(num, 10).toString(2);
}
const decToHexadecimal = (num) => {
  return parseInt(num, 10).toString(16);
}
const decToOctal = (num) => {
  return parseInt(num, 10).toString(8);
}
const hexToBinary = (num) => {
  return parseInt(num, 16).toString(2);
}
const hexToDecimal = (num) => {
  return parseInt(num, 16).toString(10);
}
const hexToOctal = (num) => {
  return parseInt(num, 16).toString(8);
}
const octToBinary = (num) => {
  return parseInt(num, 8).toString(2);
}
const octToDecimal = (num) => {
  return parseInt(num, 8).toString(10);
}
const octToHexadecimal = (num) => {
  return parseInt(num, 8).toString(16);
}

const selectedUtilityOption = parseInt(readLineSync.question('Welcome to Binary/Decimal/Hex/Octal Converters (All 12 converters). Which utility function would you like to use?\n1.binaryToDecimal \n2.binaryToHex \n3.binaryToOct \n4.decTobinary \n5.decToHex \n6.decToOct \n7.hexToBinary \n8.hexToDec \n9.hexToOct \n10.octToBinary \n11.octToDec \n12.octToHex\n'));

console.log(`You selected ${selectedUtilityOption}`);

switch(selectedUtilityOption) {
  case 1:
    const binTodec = readLineSync.question('Please enter binary number to convert into decimal\n');
    console.log("Decimal number is : "+binaryToDecimal(binTodec));
    break;
  case 2:
    const binToHex = readLineSync.question('Please enter binary number to convert into Hexadecimal\n');
    console.log("HexaDecimal number is : "+binaryToHex(binToHex));
    break;
  case 3:
    const binToOct = readLineSync.question('Please enter binary number to convert into Octal\n');
    console.log("Octal number is : "+binaryToOct(binToOct));
    break;
  case 4:
    const decToBin = readLineSync.question('Please enter decimal number to convert into binary\n');
    console.log("Binary number is : "+decTobinary(decToBin));
    break;
  case 5:
    const decToHex = readLineSync.question('Please enter decimal number to convert into HexaDecimal\n');
    console.log("HexaDecimal number is : "+decToHexadecimal(decToHex));
    break;
  case 6:
    const decToOct = readLineSync.question('Please enter decimal number to convert into Octal\n');
    console.log("Octal number is : "+decToOctal(decToOct));
    break;
  case 7:
    const hexToBin = readLineSync.question('Please enter HexaDecimal number to convert into Binary\n');
    console.log("Binary number is : "+hexToBinary(hexToBin));
    break;
  case 8:
    const hexToDec = readLineSync.question('Please enter HexaDecimal number to convert into Decimal\n');
    console.log("Decimal number is : "+hexToDecimal(hexToDec));
    break;
  case 9:
    const hexToOct = readLineSync.question('Please enter HexaDecimal number to convert into Octal\n');
    console.log("Octal number is : "+hexToOctal(hexToOct));
    break;
  case 10:
    const octToBin = readLineSync.question('Please enter octal number to convert into Binary\n');
    console.log("Binary number is : "+octToBinary(octToBin));
    break;
  case 11:
    const octToDec = readLineSync.question('Please enter octal number to convert into Decimal\n');
    console.log("Decimal number is : "+octToDecimal(octToDec));
    break;
  case 12:
    const octToHex = readLineSync.question('Please enter octal number to convert into HexaDecimal\n');
    console.log("HexaDecimal number is : "+octToHexadecimal(octToHex));
    break;
  default:
    console.log('Invalid URL\n');
    break;
}