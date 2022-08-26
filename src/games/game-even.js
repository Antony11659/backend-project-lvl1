import executeGameLogic from '../index.js';
import { makeRandomNum, makeArray } from '../libraryGames.js';

const message = 'Answer "yes" if the number is even, otherwise answer "no".';

const numForRandom = 10;

const isAnswerCorrect = (n) => (n % 2 === 0);

const makeQuestionAnswer = () => {
  const question = makeArray(makeRandomNum(numForRandom));
  return makeArray(question, isAnswerCorrect(...question));
};

const playParityGame = () => executeGameLogic(message, makeQuestionAnswer);

export default playParityGame;
