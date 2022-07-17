#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { gameLogic, makeRandomNum, startRule } from '../src/index.js';
import primeSieve from '../games/game-prime.js';

console.log('Welcome to the brain Games!');

const userName = readlineSync.question('May I have your name? ');

const greeting = () => {
    return console.log(`Hello, ${userName}!`);
};

const isPrimeNum = (round) => {
    startRule(round, 'Answer "yes" if the number is prime, otherwise answer "no".') 
    if( round === 3 ) {
        return console.log(`Congratulations, ${userName}!`);
    }

    const n = makeRandomNum(100);
    const question = readlineSync.question(`Question: ${n}\nYour answer: `);
    const answer = primeSieve(n) ? 'yes' : 'no';

    gameLogic(round, question, answer, isPrimeNum, userName);
};

greeting()
isPrimeNum(0);