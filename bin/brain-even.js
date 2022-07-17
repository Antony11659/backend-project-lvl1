#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { gameLogic, makeRandomNum, startRule } from '../src/index.js';

console.log('Welcome to the brain Games!')

const userName = readlineSync.question('May I have your name? ');

const greeting = () => {
    return console.log(`Hello, ${userName}!`);
};

const parityCheck = (round) => {
    startRule(round, 'Answer "yes" if the number is even, otherwise answer "no".') 
    if( round === 3 ) {
        return console.log(`Congratulations, ${userName}!`);
    }

    const n = makeRandomNum(100);
    const question = readlineSync.question(`Question: ${n}\nYour answer: `);
    const answer = n % 2 === 0 ? 'yes' : 'no';

    gameLogic(round, question, answer, parityCheck, userName);
};

greeting();
parityCheck(0);