#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { gameLogic, startRule } from '../src/index.js';

console.log("Welcome to the Brain Games!");

const userName = readlineSync.question('May I have your name? ');

const greeting = () => {
    return console.log(`Hello ${userName}`);
};

const calculation = (acc) => {
    startRule(acc, 'What is the result of the expression?') 
    if( acc === 3 ) {
        return console.log(`Congratulations, ${userName}!`);
    }
    const makeRandom = (n) => Math.round(Math.random() * n );
    const n1 = makeRandom(100);
    const n2 = makeRandom(100);
    const operations = ['+', '-', '*', '/'];
    const operator = operations[makeRandom(operations.length-1)];
    const question = readlineSync.question(`Question: ${n1} ${operator} ${n2}\nYour answer: `);
    const result = (num1, num2, operat) => {
        switch(operat) {
            case '+': 
              return num1 + num2
              break
            case '-': 
              return num1 - num2
              break
            case '*': 
              return num1 * num2
              break
            case '/': 
              return num1 / num2
              break
          
            default:
                return false;
          }
    };
    const answer = result(n1, n2, operator);
    gameLogic(acc, question, answer, calculation, userName);
};

greeting();
calculation(0);
