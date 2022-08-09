import readlineSync from 'readline-sync';
import { generalGameLogic, makeRandomNum } from '../index.js';

const isPrimeNum = () => {
  const message = 'Answer "yes" if the number is prime, otherwise answer "no".';

  const primeSieve = (n) => {
    if (n <= 1) {
      return 'no';
    }
    const result = [];
    for (let i = 2; i < n; i += 1) {
      if (n % i === 0) {
        result.push(i);
      }
    }
    const sieve = result.length > 0 ? 'no' : 'yes';
    return sieve;
  };

  const makeArreyOfAnswers = () => {
    const n = makeRandomNum(10);

    const userAnswer = readlineSync.question(`Question: ${n}\nYour answer: `);

    const correctAnswer = primeSieve(n);

    return [userAnswer, correctAnswer];
  };

  return generalGameLogic(message, makeArreyOfAnswers);
};
export default isPrimeNum;
