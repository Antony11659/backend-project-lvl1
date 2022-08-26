import executeGameLogic from '../index.js';
import { makeRandomNum, makeArray } from '../libraryGames.js';

const message = 'Find the greatest common divisor of given numbers.';

const numForRandom = 10;

const getGCD = (arr) => {
  const [firstEl, secondEl] = arr;
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

const makeQuestionAnswer = () => {
  const [firstNum, secondNum] = makeArray(makeRandomNum(numForRandom), makeRandomNum(numForRandom));
  const question = makeArray(firstNum, secondNum);
  return makeArray(question, getGCD(question));
};

const palyGameGCD = () => executeGameLogic(message, makeQuestionAnswer);

export default palyGameGCD;
