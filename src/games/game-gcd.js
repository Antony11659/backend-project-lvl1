import { generalGameLogic, makeRandomNum } from "../index.js";
import readlineSync from 'readline-sync';

  export const gameGCD = () => {
    const message = 'Find the greatest common divisor of given numbers.';
    
    const makeArreyOfAnswers = () => {

      const firstNum = makeRandomNum(10);

      const secondNum = makeRandomNum(10);

      const getGCD = (num1, num2) => {
          let a = num1 > num2 ? num1 : num2;
          let b = num1 < num2 ? num1 : num2;
          let r = a % b;
            if (b === 0) {
              return a;
            }
          return getGCD(b, r);
        };

      const userAnswer = readlineSync.question(`Question: ${firstNum} ${secondNum}\nYour answer: `);
      
      const correctAnswer =  getGCD(firstNum, secondNum);

      return [userAnswer, correctAnswer];

    };
      return generalGameLogic(message, makeArreyOfAnswers);
  };
