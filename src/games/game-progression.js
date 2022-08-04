import readlineSync from 'readline-sync';
import { generalGameLogic, makeRandomNum } from '../index.js';
  
export const gameProgression = () => {
    const message = 'What number is missing in this progression?';
    
    const makeArreyOfAnswers = () => {
      
      const makeSequenceAndHiddenEl = () => {
  
        const firstEl = makeRandomNum(10);
        
        const numForDiff = makeRandomNum(5);
        
        const makeArrey = (firstEl, numForDiff) => {
              const arr = [firstEl];
                 while (arr.length < 8) {
                   arr.push(arr[arr.length-1] + numForDiff);
                 }
                return arr; 
            };
        
        const makeHideEl = (firstEl, arr) => {
              let min = firstEl + 1;
              let max = arr.length - 1;
              const i = Math.floor(Math.random() * (max - min)) + min;
              return  arr[i]
            };
        
        const array = makeArrey(firstEl, numForDiff);
        
        const hiddenEl = makeHideEl(firstEl, array);
      
        const sequence = [];
      
        for (var i = 0; i < array.length; i++) {
                if ( array[i] == hiddenEl ){
                  sequence.push('..');
                }else {
                  sequence.push(array[i]);
                }
              }
        
        return [sequence.join(' '), hiddenEl]
              
      };

      const pairOfSeqAndHidEl = makeSequenceAndHiddenEl();

      const sequence = pairOfSeqAndHidEl[0];

      const userAnswer = readlineSync.question(`Question: ${sequence}\nYour answer: `);
      
      const correctAnswer =  pairOfSeqAndHidEl[1];
    
      return [userAnswer, correctAnswer];
    
    };
    
    return generalGameLogic(message, makeArreyOfAnswers);
  };
    