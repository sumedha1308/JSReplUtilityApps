const readLineSync = require('readline-sync');

const celsiuseToFahrenheit = (temp) => ((9/5)*(temp) + 32);


const fahrenheitTocelsiuse = (temp) => ((5/9)*(parseInt(temp) - 32));

const urlDecoder = (url) => decodeURIComponent(url);

const selectedUtilityOption = parseInt(readLineSync.question('Welcome to temperature convertor. Which utility function would you like to use?\n1. celsiuseToFahrenheit\n2. FahrenheitTocelsiuse\n'));

console.log(`You selected ${selectedUtilityOption}`);

switch(selectedUtilityOption) {
  case 1:
    const celToFar = readLineSync.question('Please enter the temperature in celsiuse\n');
    const farTemp = celsiuseToFahrenheit(celToFar);
    console.log('\nTemperature in Fahrenheit is : '+farTemp);
    break;
  case 2:
    const farToCel = readLineSync.question('Please enter the temperature in Fahrenheit\n');
    const celTemp = fahrenheitTocelsiuse(farToCel);
    console.log('\nTemperature in celsiuse is : '+celTemp);
    break;
  default:
    console.log('Invalid temperature\n');
    break;
}