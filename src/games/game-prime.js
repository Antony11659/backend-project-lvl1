import executeGameLogic from '../index.js';
import makeRandomNum from '../libraryGames.js';

const message = 'Answer "yes" if the number is prime, otherwise answer "no".';

const numForRandom = 10;

const makeYesNoAnswer = (value) => (value ? 'yes' : 'no');
const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  const findSmallestDivisor = (n) => (number % n === 0 ? n : findSmallestDivisor(n + 1));
  const smallestDivisor = findSmallestDivisor(2);
  return number === smallestDivisor;
};

const makeQuestionAnswer = () => {
  const question = makeRandomNum(0, numForRandom);
  const answer = makeYesNoAnswer(isPrime(question));
  return [question, answer];
};

const playGamePrime = () => executeGameLogic(message, makeQuestionAnswer);

export default playGamePrime;
