import generalGameLogic, { makeRandomNum } from '../index.js';

const message = 'Find the greatest common divisor of given numbers.';

const numForRandom = 9;

const makeQuestionElements = () => {
  const firstNum = makeRandomNum(numForRandom);
  const secondNum = makeRandomNum(numForRandom);
  return [firstNum, secondNum];
};

const getGCD = (arr) => {
  const firstEl = arr[0];
  const secondEl = arr[1];
  const recur = (num1, num2) => {
    const a = num1 > num2 ? num1 : num2;
    const b = num1 < num2 ? num1 : num2;
    const r = a % b;
    if (b === 0) {
      return a;
    }
    return recur(b, r);
  };
  return recur(firstEl, secondEl);
};

const isAnswerCorrect = getGCD;

const gameGCD = () => {
  const makeArrayOfAnswers = [makeQuestionElements, isAnswerCorrect];
  return generalGameLogic(message, makeArrayOfAnswers);
};

export default gameGCD;
