import executeGameLogic from '../index.js';
import { makeRandomNum } from '../libraryGames.js';

const message = 'What is the result of the expression?';

const numForRandom = 10;

const operations = ['+', '-', '*'];

const calculate = (num1, operator, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;

    default:
      return console.log(`operation ${operator} is not supported`);
  }
};

const makeQuestionAnswer = () => {
  const number1 = makeRandomNum(numForRandom);
  const number2 = makeRandomNum(numForRandom);
  const operator = operations[makeRandomNum(operations.length - 1)];
  const question = `${number1} ${operator} ${number2}`;
  const answer = calculate(number1, operator, number2);
  return [question, answer];
};

const playGameCalculation = () => executeGameLogic(message, makeQuestionAnswer);

export default playGameCalculation;
