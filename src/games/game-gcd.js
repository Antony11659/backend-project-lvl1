import readlineSync from 'readline-sync';
import { generalGameLogic, makeRandomNum } from '../index.js';

const gameGCD = () => {
  const message = 'Find the greatest common divisor of given numbers.';

  const makeArreyOfAnswers = () => {
    const firstNum = makeRandomNum(10);

    const secondNum = makeRandomNum(10);

    const getGCD = (num1, num2) => {
      const a = num1 > num2 ? num1 : num2;
      const b = num1 < num2 ? num1 : num2;
      const r = a % b;
      if (b === 0) {
        return a;
      }
      return getGCD(b, r);
    };

    const userAnswer = readlineSync.question(`Question: ${firstNum} ${secondNum}\nYour answer: `);

    const correctAnswer = getGCD(firstNum, secondNum);

    return [userAnswer, correctAnswer];
  };
  return generalGameLogic(message, makeArreyOfAnswers);
};
export default gameGCD;
