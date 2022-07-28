import { generalGameLogic } from "../src/index.js";
import readlineSync from 'readline-sync';

export const calculation = () => {
  const message = 'What is the result of the expression?';
  
  const makeOperator = () => {
    const operations = ['+', '-', '*'];
    return operations[Math.round(Math.random() * 2)];
  };
  
  const question = (num1, num2, operator) => readlineSync.question(`Question: ${num1} ${operator} ${num2}\nYour answer: `);
  
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
  
  const secondNum = 10;

  const answer = produceCalc;

  const additionalFunction = makeOperator;

  generalGameLogic(message, question, answer, secondNum, additionalFunction);
};