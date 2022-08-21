import executeGameLogic from '../index.js';
import makeRandomNum from '../random.js';

const message = 'What is the result of the expression?';

const numForRandom = 9;

const makeOperator = () => {
  const operations = ['+', '-', '*'];
  return operations[makeRandomNum(operations.length - 1)];
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
  const expression = [firstNum(numForRandom), operation(), secondNum(numForRandom)];
  return [expression, makeAnswer(expression)];
};

const calculation = () => executeGameLogic(message, makeQuestionAnswer);

export default calculation;
