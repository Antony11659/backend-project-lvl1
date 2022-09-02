import executeGameLogic from '../index.js';
import makeRandomNum from '../libraryGames.js';

const message = 'What number is missing in this progression?';

const progressionLength = 10;

const maxGapBetweenElements = 5;

const minGapBetweenElements = 1;

const sizeOfFistEl = 8;

const makeSequence = (first, step) => {
  const result = [];
  for (let i = 0; i < progressionLength; i += 1) {
    result.push(first + (step * i));
  }
  return result;
};

const makeQuestionAnswer = () => {
  const gap = makeRandomNum(maxGapBetweenElements, minGapBetweenElements);
  const firstNum = makeRandomNum(sizeOfFistEl);
  const indexOfHiddenElement = makeRandomNum(progressionLength);
  const sequence = makeSequence(firstNum, gap);
  const question = sequence.map((el, i) => (i === indexOfHiddenElement ? '..' : el)).join(' ');
  const answer = sequence[indexOfHiddenElement];
  return [question, answer];
};

const playGameProgression = () => executeGameLogic(message, makeQuestionAnswer);

export default playGameProgression;
