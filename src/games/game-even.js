import { generalGameLogic } from '../index.js';
import readlineSync from 'readline-sync';

export const parityGame = () => {
    const message = 'Answer "yes" if the number is even, otherwise answer "no".';

    const question = (n) => readlineSync.question(`Question: ${n}\nYour answer: `);
    
    const answer = (n) => n % 2 === 0 ? 'yes' : 'no';

    const secondNum = null;
  
    const additionalFunction = null;

    generalGameLogic(message, question, answer, secondNum, additionalFunction);
};