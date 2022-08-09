import readlineSync from 'readline-sync';

export const makeRandomNum = (num) => Math.round(Math.random() * num) + 1;

export const generalGameLogic = (gameRule, makePair) => {
  console.log('Welcome to the brain Games!');

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!`);

  console.log(gameRule);

  const engine = (makeAnswers, round) => {
    if (round === 3) {
      return console.log(`Congratulations, ${userName}!`);
    }

    const answers = makeAnswers();

    const userAnswer = answers[0];

    const correctAnswer = answers[1];

    // eslint-disable-next-line eqeqeq
    if (userAnswer == correctAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}\nLet's try again, ${userName}!`);
    }
    // eslint-disable-next-line no-return-assign, no-param-reassign
    return engine(makeAnswers, round += 1);
  };

  return engine(makePair, 0);
};
