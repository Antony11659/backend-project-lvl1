import generalGameLogic, { makeRandomNum } from '../index.js';

const message = 'What number is missing in this progression?';

const arrayLength = 10;

const gapBetweenElements = 4;

const sizeOfFistEl = 8;

const makeArray = (firstElement, numDiff) => {
  const arr = [firstElement];
  while (arr.length < arrayLength) {
    arr.push(arr[arr.length - 1] + numDiff);
  }
  return arr;
};

const hideEl = (firstIndex, arr) => {
  const min = firstIndex;
  const max = arr.length - 1;
  const i = Math.floor(Math.random() * (max - min + 1)) + min;
  return arr[i];
};

const makeQuestionElements = () => {
  const firstEl = makeRandomNum(sizeOfFistEl);
  const numForDiff = makeRandomNum(gapBetweenElements);
  const array = makeArray(firstEl, numForDiff);
  const answer = hideEl(firstEl, array);
  const question = [];

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === answer) {
      question.push('..');
    } else {
      question.push(array[i]);
    }
  }

  return question;
};

const isAnswerCorrect = (array) => {
  const index = array.indexOf('..');
  const elementIsZero = array.length / 2 > index;
  const goRight = array[index + 2] - array[index + 1];
  const goLeft = array[index - 1] - array[index - 2];
  const difference = elementIsZero ? goRight : goLeft;
  const element = elementIsZero ? array[index + 1] - difference : array[index - 1] + difference;
  return element;
};

const gameProgression = () => {
  const makeArrayOfAnswers = [makeQuestionElements, isAnswerCorrect];
  return generalGameLogic(message, makeArrayOfAnswers);
};

export default gameProgression;
