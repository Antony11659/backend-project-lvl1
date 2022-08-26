import executeGameLogic from '../index.js';
import { makeRandomNum, makeArray } from '../libraryGames.js';

const message = 'Answer "yes" if the number is prime, otherwise answer "no".';

const numForRandom = 10;

const makePrimeSieve = (n) => {
  if (n <= 1) {
    return false;
  }

  const result = [];

  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      result.push(i);
    }
  }
  const sieve = result.length <= 0;
  return sieve;
};

const makeQuestionAnswer = () => {
  const question = makeArray(makeRandomNum(numForRandom));
  return makeArray(question, makePrimeSieve(...question));
};

const playGamePrimeNum = () => executeGameLogic(message, makeQuestionAnswer);

export default playGamePrimeNum;
