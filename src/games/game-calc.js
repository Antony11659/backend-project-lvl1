import generalGameLogic, { makeRandomNum } from '../index.js';

const message = 'What is the result of the expression?';

const numForRandom = 9;

const makeOperator = () => {
  // null gets rid of the side effect
  const operations = [null, '+', '-', '*'];
  return operations[makeRandomNum(2)];
};
const produceCalculation = (arr) => {
  const num1 = arr[0];
  const operator = arr[1];
  const num2 = arr[2];

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

const makeQuestionElements = () => {
  const firstNum = makeRandomNum(numForRandom);
  const secondNum = makeRandomNum(numForRandom);
  const operation = makeOperator();
  return [firstNum, operation, secondNum];
};

const isAnswerCorrect = produceCalculation;

const calculation = () => {
  const makeArrayOfAnswers = [makeQuestionElements, isAnswerCorrect];
  return generalGameLogic(message, makeArrayOfAnswers);
};

export default calculation;
