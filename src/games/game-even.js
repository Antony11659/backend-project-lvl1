import executeGameLogic from '../index.js';
import makeYesNoAnswer, { makeRandomNum } from '../libraryGames.js';

const message = 'Answer "yes" if the number is even, otherwise answer "no".';

const numForRandom = 10;

const isEven = (n) => (n % 2 === 0);

const makeQuestionAnswer = () => {
  const question = makeRandomNum(numForRandom);
  const answer = makeYesNoAnswer(isEven(question));
  return [question, answer];
};

const playEvenGame = () => executeGameLogic(message, makeQuestionAnswer);

export default playEvenGame;
