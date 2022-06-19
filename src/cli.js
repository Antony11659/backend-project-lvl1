var readlineSync = require('readline-sync');

export var userName = readlineSync.question('May I have your name? ');

export const greeting = () => {
 return console.log('Hi ' + userName + '!');
};

