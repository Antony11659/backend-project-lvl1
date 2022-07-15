#!/usr/bin/env node
import readlineSync from 'readline-sync';
import getGCD from '../games/game-gcd.js';
import { gameLogic, makeRandomNum, startRule } from '../src/index.js';

console.log('Welcome to the brain Games!')

const userName = readlineSync.question('May I have your name? ');

const greeting = () => {
    return console.log(`Hello ${userName}`);
};

const gameGCD = (acc) => {
    startRule(acc, 'Find the greatest common divisor of given numbers.') 
    if( acc === 3 ) {
        return console.log(`Congratulations, ${userName}!`);
    }

    const n1 = makeRandomNum(10);
    const n2 = makeRandomNum(10);
    const question = readlineSync.question(`Question: ${n1} ${n2}\nYour answer: `);
    const answer = getGCD(n1, n2);

    gameLogic(acc, question, answer, gameGCD, userName);
};

greeting();
gameGCD(0);
