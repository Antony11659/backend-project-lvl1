import readlineSync from 'readline-sync';
import { generalGameLogic, makeRandomNum } from '../index.js';

const gameProgression = () => {
  const message = 'What number is missing in this progression?';

  const makeArreyOfAnswers = () => {
    const makeSequenceAndHiddenEl = () => {
      const firstEl = makeRandomNum(8);

      const numForDiff = makeRandomNum(4);

      const makeArrey = (firstElement, numDiff) => {
        const arr = [firstElement];
        while (arr.length < 10) {
          arr.push(arr[arr.length - 1] + numDiff);
        }
        return arr;
      };

      const makeHideEl = (firstIndex, arr) => {
        const min = firstIndex;
        const max = arr.length - 1;
        const i = Math.floor(Math.random() * (max - min + 1)) + min;
        return arr[i];
      };

      const array = makeArrey(firstEl, numForDiff);

      const hiddenEl = makeHideEl(firstEl, array);

      const sequence = [];

      for (let i = 0; i < array.length; i += 1) {
        if (array[i] === hiddenEl) {
          sequence.push('..');
        } else {
          sequence.push(array[i]);
        }
      }

      return [sequence.join(' '), hiddenEl];
    };

    const pairOfSeqAndHidEl = makeSequenceAndHiddenEl();

    const sequence = pairOfSeqAndHidEl[0];

    const userAnswer = readlineSync.question(`Question: ${sequence}\nYour answer: `);

    const correctAnswer = pairOfSeqAndHidEl[1];

    return [userAnswer, correctAnswer];
  };

  return generalGameLogic(message, makeArreyOfAnswers);
};
export default gameProgression;
