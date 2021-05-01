const readLineSync = require('readline-sync');

const componentToHex = (c) => {
  let hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}
const rgbToHex = (r, g, b) => {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
const convertToRGB = (str)=> {
    if(str.length != 6){
        throw "Only six-digit hex colors are allowed.";
    }

    let aRgbHex = str.match(/.{1,2}/g);
    let aRgb = [
        parseInt(aRgbHex[0], 16),
        parseInt(aRgbHex[1], 16),
        parseInt(aRgbHex[2], 16)
    ];
    return aRgb;
}

const selectedUtilityOption = parseInt(readLineSync.question('Welcome to RGB ⇔ Hex convertor. Which utility function would you like to use?\n1.RGBToHexConversion\n2.HexToRGBConversion \n'));

console.log(`You selected ${selectedUtilityOption}`);

switch(selectedUtilityOption) {
  case 1:
    const red = readLineSync.question('Please enter the red color value between 0-255\n');
    const r = parseInt(red);
    const green = readLineSync.question('Please enter the green color value between 0-255\n');
    const g = parseInt(green);
    const blue = readLineSync.question('Please enter the blue color value between 0-255\n');
    const b = parseInt(blue);
    console.log('\nHex color is : '+ rgbToHex(r,g,b));
    break;
  case 2:
    const hexToRgb = readLineSync.question('Please enter the hex string to convert into rgb \n');
    const regValue = convertToRGB(hexToRgb);
    console.log('{red: '+regValue[0]+', blue: '+regValue[1]+ ', green: '+regValue[2]+'}');
    break;
  default:
    console.log('Invalid URL\n');
    break;
}