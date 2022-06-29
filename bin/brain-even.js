#!/usr/bin/env node
import readlineSync, { question } from 'readline-sync';

console.log("Welcome to the Brain Games!");

const userName = readlineSync.question('May I have your name? ');
let flag = true;

const greeting = () => {
    return console.log(`Hello ${userName}`);
};

const parityCheck = (acc) => {
    if (flag) {
        console.log('Answer "yes" if the number is even, otherwise answer "no".');
    }
    const n = Math.round(Math.random() * 100 );
    const question = readlineSync.question(`Question: ${n} `);
    const answer = n % 2 === 0 ? 'yes' : 'no';
    if(acc >= 2) {
        console.log(`Congratulations, ${userName}!`);
    } else if(question === answer){
        flag = false;
        console.log(`Your answer: ${answer}\nCorrect!`);
        acc++;
        parityCheck(acc);  
    } else {
        acc = 0;
        console.log(`${question} is wrong answer ;(. Correct answer was ${answer}`)
        console.log(`Let's try again, ${userName}!`);
    }
};

greeting();
parityCheck(0);
