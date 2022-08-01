import readlineSync from 'readline-sync';
import { generalGameLogic } from '../index.js';
  
export const gameProgression = () => {
    const message = 'What number is missing in this progression?'; 
    
    const question = (num1 = null, num2 = null, el, arr) => {
             const result = [];
             for (var i = 0; i < arr.length; i++) {
               if ( arr[i] == el ){
                 result.push('..');
               }else {
                 result.push(arr[i]);
               }
             }
             const sequence = result.join(' ');
         return readlineSync.question(`Question: ${sequence}\nYour answer: `);
       };
    
    const ranEl = ( firstEl, arr ) => {
      let min = firstEl;
      let max = arr.length - 1;
      const i = Math.floor(Math.random() * (max - min + 1)) + min;
      return  arr[i]
    };
    
    const answer = (a, b, randomEl) => randomEl;

    const secondNumber = 5;

    const additionalFunction = ranEl;

    const makeArrey = (firstEl, numForDiff) => {
      const arr = [firstEl];
         while (arr.length < 8) {
           arr.push(arr[arr.length-1] + numForDiff);
         }
        return arr; 
    }
    
    generalGameLogic(message, question, answer, secondNumber, additionalFunction, makeArrey);
};