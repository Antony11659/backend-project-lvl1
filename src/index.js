import readlineSync from 'readline-sync';

export const roundsCount = 3;

const executeGameLogic = (gameRule, generateRoundData) => {
  console.log('Welcome to the brain Games!');

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!`);

  console.log(gameRule);

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, answer] = generateRoundData();
    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);

    if (userAnswer !== answer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default executeGameLogic;
