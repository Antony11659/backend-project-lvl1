#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { produceCalc } from '../games/game-calc.js';
import { gameLogic, makeRandomNum, startRule } from '../src/index.js';

console.log("Welcome to the Brain Games!");

const userName = readlineSync.question('May I have your name? ');

const greeting = () => {
    return console.log(`Hello ${userName}`);
};

const calculation = (round) => {
    startRule(round, 'What is the result of the expression?') 
    if( round === 3 ) {
        return console.log(`Congratulations, ${userName}!`);
    }
    const n1 = makeRandomNum(10);
    const n2 = makeRandomNum(10);
    const operations = ['+', '-', '*', '/'];
    const randomOperator = operations[makeRandomNum(operations.length-1)];
    const question = readlineSync.question(`Question: ${n1} ${randomOperator} ${n2}\nYour answer: `);
    const answer = produceCalc(n1, n2, randomOperator);
    gameLogic(round, question, answer, calculation, userName);
};

greeting();
calculation(0);
