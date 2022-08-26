import executeGameLogic from '../index.js';
import { makeRandomNum, makeArray } from '../libraryGames.js';

const message = 'What number is missing in this progression?';

const arrayLength = 10;

const maxGapBetweenElements = 5;

const minGapBetweenElements = 1;

const sizeOfFistEl = 8;

const makeSequence = (sequenceLength) => {
  const result = [];
  const el = [];
  const hiddenEl = makeRandomNum(sequenceLength - 1);
  const gap = makeRandomNum(maxGapBetweenElements, minGapBetweenElements);
  let firstNum = makeRandomNum(sizeOfFistEl);
  for (let i = 0; i < sequenceLength; i += 1) {
    if (i === hiddenEl) {
      result.push('..');
      firstNum += gap;
      el.push(firstNum);
    } else {
      firstNum += gap;
      result.push(firstNum);
    }
  }
  return makeArray(result, el);
};

const makeQuestionAnswer = () => {
  const [question, answer] = makeSequence(arrayLength);
  return makeArray(question, answer);
};

const playGameProgression = () => executeGameLogic(message, makeQuestionAnswer);

export default playGameProgression;
