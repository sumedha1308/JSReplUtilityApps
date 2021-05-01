const readLineSync = require('readline-sync');

const toHumanDate = (time) => {
  const myDate = new Date( time *1000);
console.log("Human-readable date is : "+myDate.toGMTString()+"\n"+myDate.toLocaleString());
}

const toEpochDate = (year, month, date, hour, minute, seconds) => {
const myDate = new Date(year,month,date,hour,minute,seconds); // Your timezone!
const myEpoch = myDate.getTime()/1000.0;
console.log("Epoch date is : "+myEpoch);
}

const selectedUtilityOption = parseInt(readLineSync.question('Welcome to Epoch Converters. Which utility function would you like to use?\n1. urlEncode\n2. urlDecode\n'));

console.log(`You selected ${selectedUtilityOption}`);

switch(selectedUtilityOption) {
  case 1:
    const timeToHumnRead = readLineSync.question('Please enter the date to convert into human readable format\n');
    const timeHuman = toHumanDate(timeToHumnRead);
    break;
  case 2:
    const year = readLineSync.question('Please enter the year\n');
    const month = readLineSync.question('Please enter the month\n');
    const date = readLineSync.question('Please enter the date\n');
    const hours = readLineSync.question('Please enter the hour\n');
    const minutes = readLineSync.question('Please enter the minutes\n');
    const seconds = readLineSync.question('Please enter the seconds\n');
    const epochTime = toEpochDate(year, month, date, hours, minutes, seconds );
    break;
  default:
    console.log('Invalid URL\n');
    break;
}