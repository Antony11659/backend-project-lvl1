#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getSequence, makeSequence } from '../games/game-progression.js';
import { gameLogic, makeRandomNum, startRule } from '../src/index.js';

console.log('Welcome to the brain Games!');

const userName = readlineSync.question('May I have your name? ');

const greeting = () => {
    return console.log(`Hello, ${userName}!`);
};

const gameProgression = (round) => {
    startRule(round, 'What number is missing in this progression?'); 
    if( round === 3 ) {
        return console.log(`Congratulations, ${userName}!`);
    }
    
    const diffBetweenNum = makeRandomNum(5);
    const firstNum = makeRandomNum(10);
    const array = makeSequence(diffBetweenNum, firstNum);
    const ranEl = array[makeRandomNum(array.length-1)];

    const question = readlineSync.question(`Question: ${getSequence(array, ranEl)}\nYour answer: `);
    const answer = ranEl;

    gameLogic(round, question, answer, gameProgression, userName);
};

greeting();
gameProgression(0);