import generalGameLogic, { makeRandomNum } from '../index.js';

const message = 'Answer "yes" if the number is even, otherwise answer "no".';

const numForRandom = 9;
const isAnswerCorrect = (n) => (n % 2 === 0);
const makeQuestionElements = () => [makeRandomNum(numForRandom)];

const parityGame = () => {
  const makeArrayOfAnswers = [makeQuestionElements, isAnswerCorrect];
  return generalGameLogic(message, makeArrayOfAnswers);
};

export default parityGame;
