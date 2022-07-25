import readlineSync from 'readline-sync';

export const generalGameLogic = (startRule, ques, answer, secondNum, fanc, makeArrey = null) => {
    console.log('Welcome to the brain Games!');

    const userName = readlineSync.question('May I have your name? ');
    
    console.log(`Hello, ${userName}!`);

    console.log(startRule);

    const makeRandomNum = (num) => Math.round(Math.random() * num) + 1;
    
    for (var i = 0; i < 3; i++) {
        const n = makeRandomNum(10);
        const n2 = secondNum !== null ? makeRandomNum(secondNum) : null;
        const arrayForProgression = makeArrey !== null ? makeArrey(n, n2) : null;
        const randomElement = fanc !== null ? fanc(n2, arrayForProgression) : null;
        const question = ques(n, n2, randomElement, arrayForProgression);
        
        if (question == answer(n, n2, randomElement)){ 
            console.log('Correct!');
        }else{
            return console.log(`${question} is wrong answer ;(. Correct answer was ${answer(n, n2, randomElement)}\nLet's try again, ${userName}!`);
        }  
    }
    return console.log(`Congratulations, ${userName}!`);
};