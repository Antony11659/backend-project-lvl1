import generalGameLogic, { makeRandomNum } from '../index.js';

const message = 'Answer "yes" if the number is prime, otherwise answer "no".';

const numForRandom = 9;

const primeSieve = (arr) => {
  const n = arr[0];

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

const makeQuestionElements = () => {
  const n = makeRandomNum(numForRandom);
  return [n];
};

const isAnswerCorrect = primeSieve;

const isPrimeNum = () => {
  const makeArrayOfAnswers = [makeQuestionElements, isAnswerCorrect];
  return generalGameLogic(message, makeArrayOfAnswers);
};

export default isPrimeNum;
