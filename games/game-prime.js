import { generalGameLogic } from "../src/index.js";
import readlineSync from 'readline-sync';

export const isPrimeNum = () => {
    const message = 'Answer "yes" if the number is prime, otherwise answer "no".';
    
    const question = (n) => readlineSync.question(`Question: ${n}\nYour answer: `);

    const primeSieve = (n) => {
      const result = [];
      for (var i = 2; i < n; i++){
        if(n % i === 0){
          result.push(i);
        }
      }
      const sieve = result.length > 0 ? 'no' : 'yes';
      return sieve;
    };
    
    const secondNumber = null;

    const answer = primeSieve;

    const additionalFunction = null;

    generalGameLogic(message, question, answer, secondNumber, additionalFunction);
};
