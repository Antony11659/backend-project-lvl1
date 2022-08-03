import { generalGameLogic, makeRandomNum } from "../index.js";
import readlineSync from 'readline-sync';

export const calculation = () => {
  const message = 'What is the result of the expression?';

  const makeArreyOfAnswers = () => {

    const makeOperator = () => {
      // null gets rid of the side effect 
      const operations = [null, '+', '-', '*'];
      return operations[makeRandomNum(2)];
    };
    
    const produceCalc = (num1, num2, operat) => {
      switch(operat) {
          case '+': 
            return num1 + num2;
            break;
          case '-': 
            return num1 - num2;
            break;
          case '*': 
            return num1 * num2;
            break;
        
          default:
              return false;
        }
    };

    const firstNum = makeRandomNum(10);

    const secondNum = makeRandomNum(10);

    const operator = makeOperator();
  
    const userAnswer = readlineSync.question(`Question: ${firstNum} ${operator} ${secondNum}\nYour answer: `);
    
    const correctAnswer =  produceCalc(firstNum, secondNum, operator);
  
    return [userAnswer, correctAnswer];
  
  };
  return generalGameLogic(message, makeArreyOfAnswers);
};