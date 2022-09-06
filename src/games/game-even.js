import executeGameLogic from '../index.js';
import makeRandomNum from '../libraryGames.js';

const message = 'Answer "yes" if the number is even, otherwise answer "no".';

const numForRandom = 10;

const isEven = (n) => (n % 2 === 0);

const makeQuestionAnswer = () => {
  const question = makeRandomNum(0, numForRandom);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer.toString()];
};

const playEvenGame = () => executeGameLogic(message, makeQuestionAnswer);

export default playEvenGame;
