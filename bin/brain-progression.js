#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getSequence, makeSequence } from '../games/game-progression.js';
import { gameLogic, makeRandomNum, startRule } from '../src/index.js';

console.log('Welcome to the brain Games!');

const userName = readlineSync.question('May I have your name? ');

const greeting = () => {
    return console.log(`Hello ${userName}`);
};

const gameProgression = (acc) => {
    startRule(acc, 'What number is missing in the progression?'); 
    if( acc === 3 ) {
        return console.log(`Congratulations, ${userName}!`);
    }
    // Random Section
    const numForDiff = makeRandomNum(5);
    const numForFirstEl = makeRandomNum(10);
    const array = makeSequence(numForDiff, numForFirstEl);
    const ranEl = array[makeRandomNum(array.length-1)];
    // End Random Section

    const question = readlineSync.question(`Question: ${getSequence(array, ranEl)}\nYour answer: `);
    const answer = ranEl;

    gameLogic(acc, question, answer, gameProgression, userName);
};

greeting();
gameProgression(0);