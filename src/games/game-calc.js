import executeGameLogic from '../index.js';
import { makeRandomNum, makeArray } from '../libraryGames.js';

const message = 'What is the result of the expression?';

const numForRandom = 9;

const makeOperator = () => {
  const operations = makeArray('+', '-', '*');
  const index = makeRandomNum(operations.length - 1);
  return operations[index];
};

const produceCalculation = (num1, operator, num2) => {
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

const makeAnswer = (expression) => {
  const [num1, operator, num2] = expression;
  return produceCalculation(num1, operator, num2);
};

const makeQuestionAnswer = () => {
  const [firstNum, secondNum, operation] = [makeRandomNum, makeRandomNum, makeOperator];
  const expression = makeArray(firstNum(numForRandom), operation(), secondNum(numForRandom));
  return makeArray(expression, makeAnswer(expression));
};

const playGameCalculation = () => executeGameLogic(message, makeQuestionAnswer);

export default playGameCalculation;
