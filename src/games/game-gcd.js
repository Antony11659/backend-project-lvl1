import executeGameLogic from '../index.js';
import { makeRandomNum } from '../libraryGames.js';

const message = 'Find the greatest common divisor of given numbers.';

const numForRandom = 10;

const getGCD = (a, b) => (b === 0 ? a : getGCD(b, a % b));

const makeQuestionAnswer = () => {
  const number1 = makeRandomNum(numForRandom);
  const number2 = makeRandomNum(numForRandom);
  const question = `${number1} ${number2}`;
  const answer = getGCD(number1, number2);
  return [question, answer];
};

const palyGameGCD = () => executeGameLogic(message, makeQuestionAnswer);

export default palyGameGCD;
