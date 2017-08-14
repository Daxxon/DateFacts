const chalk = require('chalk');
const moment = require('moment');

// now = moment().format('dddd, MMMM Do YYYY, h:mm:ss A' + '.');
now = moment();
dayOfYear = now.format('DDDo');
hourOfDay = now.format('H');
minuteOfHour = now.format('m');
secondOfMInute = now.format('s');
secondOfDay = hourOfDay * minuteOfHour + secondOfMInute;

console.log('It is ' + chalk.cyan(now.format('dddd, MMMM Do YYYY, h:mm:ss A') + '.'));
console.log('It is the ' + chalk.magenta(dayOfYear) + ' day of the year.');
console.log('It is ' + chalk.greenBright(secondOfDay) + ' seconds into the day.');
// console.log('It ' + isDST + ' during Daylight Savings Time.');
// console.log('It ' + isLeapYear + ' a leap year.');
checkForDst();
checkForLeapYear();

function checkForDst() {
  (now.isDST()) ? console.log('It ' + chalk.green('is') + ' during Daylight Savings Time.') : console.log('It ' + chalk.red('is not') + ' during Daylight Savings Time.');
}

function checkForLeapYear () {
  (now.isLeapYear()) ? console.log('It' + chalk.green('is') + ' a leap year.') : console.log('It ' + chalk.red('is not') + ' a leap year.') ;
}
