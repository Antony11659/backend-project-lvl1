#!/usr/bin/env node
<<<<<<< HEAD
import readlineSync from 'readline-sync';
import { gameLogic, startRule } from '../src/index.js';

console.log('Welcome to the brain Games!')

const userName = readlineSync.question('May I have your name? ');
=======
import readlineSync, { question } from 'readline-sync';

console.log("Welcome to the Brain Games!");

const userName = readlineSync.question('May I have your name? ');
let flag = true;
>>>>>>> refs/remotes/origin/main

const greeting = () => {
    return console.log(`Hello ${userName}`);
};

const parityCheck = (acc) => {
<<<<<<< HEAD
    startRule(acc, 'Answer "yes" if the number is even, otherwise answer "no".') 
    if( acc === 3 ) {
        return console.log(`Congratulations, ${userName}!`);
    }

    const n = Math.round(Math.random() * 100 );
    const question = readlineSync.question(`Question: ${n} `);
    const answer = n % 2 === 0 ? 'yes' : 'no';

    gameLogic(acc, question, answer, parityCheck, userName);
};

greeting()
parityCheck(0);
=======
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
>>>>>>> refs/remotes/origin/main
