import { generalGameLogic, makeRandomNum } from "../index.js";
import readlineSync from 'readline-sync';

export const isPrimeNum = () => {
    const message = 'Answer "yes" if the number is prime, otherwise answer "no".';

    const primeSieve = (n) => {
      if (n <= 1) {
        return 'no';
      }
      const result = [];
      for (var i = 2; i < n; i++){
        if ( n % i === 0 ){
          result.push(i);
        }
      }
      const sieve = result.length > 0 ? 'no' : 'yes';
      return sieve;
    };
    
    const checkAnswer = (user) => {

      const n = makeRandomNum(10);
    
      const userAnswer = readlineSync.question(`Question: ${n}\nYour answer: `);
      
      const correctAnswer =  primeSieve(n);
    
      if (userAnswer === correctAnswer){ 
          console.log('Correct!');
      } else{
          return console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}\nLet's try again, ${user}!`);
      }
    
    };
    
    generalGameLogic(message, checkAnswer);
};
// export const isPrimeNum = () => {
//     const message = 'Answer "yes" if the number is prime, otherwise answer "no".';
    
//     const question = (n) => readlineSync.question(`Question: ${n}\nYour answer: `);

//     const primeSieve = (n) => {
//       if (n <= 1) {
//         return 'no';
//       }
//       const result = [];
//       for (var i = 2; i < n; i++){
//         if ( n % i === 0 ){
//           result.push(i);
//         }
//       }
//       const sieve = result.length > 0 ? 'no' : 'yes';
//       return sieve;
//     };
    
//     const secondNumber = null;

//     const answer = primeSieve;

//     const additionalFunction = null;

//     generalGameLogic(message, question, answer, secondNumber, additionalFunction);
// };
