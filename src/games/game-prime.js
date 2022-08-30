import executeGameLogic from '../index.js';
import makeYesNoAnswer, { makeRandomNum } from '../libraryGames.js';

const message = 'Answer "yes" if the number is prime, otherwise answer "no".';

const numForRandom = 10;

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  const iter = (n) => (number % n === 0 ? n : iter(n + 1));
  const smallestDivisor = iter(2);
  return number === smallestDivisor;
};

const makeQuestionAnswer = () => {
  const question = makeRandomNum(numForRandom);
  const answer = makeYesNoAnswer(isPrime(question));
  return [question, answer];
};

const playGamePrime = () => executeGameLogic(message, makeQuestionAnswer);

export default playGamePrime;
