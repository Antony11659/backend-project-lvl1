import { generalGameLogic } from "../src/index.js";
import readlineSync from 'readline-sync';

export const calculation = () => {
  const message = 'What is the result of the expression?';
  
  const makeOperator = (a, b) => {
    const operations = ['+', '-', '*'];
    return operations[Math.round(Math.random() * 2)];
  };
  
  const question = (a, b, operator) => readlineSync.question(`Question: ${a} ${operator} ${b}\nYour answer: `);
  
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