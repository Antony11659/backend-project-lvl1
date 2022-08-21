import readlineSync from 'readline-sync';

const makeCorrectAnswer = (answer) => {
  if (answer === true) {
    return 'yes';
  }
  if (answer === false) {
    return 'no';
  }
  return answer.toString();
};

const executeGameLogic = (gameRule, makeQuestionAnswer) => {
  console.log('Welcome to the brain Games!');

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!`);

  console.log(gameRule);

  const runRound = (generateRoundData) => {
    const round = 3;

    for (let i = 0; i < round; i += 1) {
      const [question, answer] = generateRoundData();
      const correctAnswer = makeCorrectAnswer(answer);
      const questionForUser = question.join(' ');
      const userAnswer = readlineSync.question(`Question: ${questionForUser}\nYour answer: `);

      if (userAnswer !== correctAnswer) {
        console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}\nLet's try again, ${userName}!`);
        return false;
      }
      console.log('Correct!');
    }

    console.log(`Congratulations, ${userName}!`);
  };

  return runRound(makeQuestionAnswer);
};

export default executeGameLogic;
