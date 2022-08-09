import readlineSync from 'readline-sync';
import { generalGameLogic, makeRandomNum } from '../index.js';

const parityGame = () => {
  const message = 'Answer "yes" if the number is even, otherwise answer "no".';

  const makeArreyOfAnswers = () => {
    const n = makeRandomNum(10);

    const userAnswer = readlineSync.question(`Question: ${n}\nYour answer: `);

    const correctAnswer = n % 2 === 0 ? 'yes' : 'no';

    return [userAnswer, correctAnswer];
  };

  return generalGameLogic(message, makeArreyOfAnswers);
};
export default parityGame;
