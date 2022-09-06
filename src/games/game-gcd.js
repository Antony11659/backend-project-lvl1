import executeGameLogic from '../index.js';
import makeRandomNum from '../libraryGames.js';

const message = 'Find the greatest common divisor of given numbers.';

const numForRandom = 10;

const getGCD = (a, b) => (b === 0 ? a : getGCD(b, a % b));

const makeQuestionAnswer = () => {
  const number1 = makeRandomNum(0, numForRandom);
  const number2 = makeRandomNum(0, numForRandom);
  const question = `${number1} ${number2}`;
  const answer = getGCD(number1, number2);
  return [question, answer.toString()];
};

const palyGameGCD = () => executeGameLogic(message, makeQuestionAnswer);

export default palyGameGCD;
