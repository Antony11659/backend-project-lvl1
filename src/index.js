import readlineSync from 'readline-sync';

// numForRandom must be less than the expected number by one!
export const makeRandomNum = (num) => Math.round(Math.random() * num) + 1;

const makeCorrectAnswer = (answer) => {
  if (answer === true) {
    return 'yes';
  }
  if (answer === false) {
    return 'no';
  }
  return answer;
};

const generalGameLogic = (gameRule, pairOfQuestionsAndCorrectAnswer) => {
  console.log('Welcome to the brain Games!');

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!`);

  console.log(gameRule);

  const engine = (array) => {
    const round = 3;

    const checkAnswer = array[1];

    for (let i = 0; i < round; i += 1) {
      const question = array[0]();
      const questionForUser = question.join(' ');
      const userAnswer = readlineSync.question(`Question: ${questionForUser}\nYour answer: `);
      const correctAnswer = makeCorrectAnswer(checkAnswer(question)).toString();

      if (userAnswer !== correctAnswer) {
        console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
        return console.log(`Let's try again, ${userName}!`);
      }
      console.log('Correct!');
    }

    return console.log(`Congratulations, ${userName}!`);
  };

  return engine(pairOfQuestionsAndCorrectAnswer);
};

export default generalGameLogic;
