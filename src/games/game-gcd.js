import { generalGameLogic } from "../index.js";
import readlineSync from 'readline-sync';

  export const gameGCD = (round) => {
    const message = 'Find the greatest common divisor of given numbers.'; 
    
    const question = (n1, n2) => readlineSync.question(`Question: ${n1} ${n2}\nYour answer: `);
      
    const getGCD = (num1, num2) => {
        let a = num1 > num2 ? num1 : num2;
        let b = num1 < num2 ? num1 : num2;
        let r = a % b;
          if ( b === 0 ) {
            return a;
          }
        return getGCD(b, r);
      };

      const secondNumber = 10;

      const answer = getGCD;

      const additionalFunction = null;
  
      generalGameLogic(message, question, answer, secondNumber, additionalFunction);
  };
  