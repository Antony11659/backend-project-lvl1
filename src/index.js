import readlineSync from 'readline-sync';

export const generalGameLogic = (startRule, ques, answer, secondNum, fanc, makeArrey = null) => {
    console.log('Welcome to the brain Games!');

    const userName = readlineSync.question('May I have your name? ');
    
    console.log(`Hello, ${userName}!`);

    console.log(startRule);

    const makeRandomNum = (num) => Math.round(Math.random() * num) + 1;
    
    for (var i = 0; i < 3; i++) {
        const randomNum = makeRandomNum(10);
        const randomNumSecond = secondNum !== null ? makeRandomNum(secondNum) : null;
        const arrayForProgression = makeArrey !== null ? makeArrey(randomNum, randomNumSecond) : null;
        const randomElement = fanc !== null ? fanc(randomNumSecond, arrayForProgression) : null;
        const question = ques(randomNum, randomNumSecond, randomElement, arrayForProgression);
        
        if (question == answer(randomNum, randomNumSecond, randomElement)){ 
            console.log('Correct!');
        }else{
            return console.log(`${question} is wrong answer ;(. Correct answer was ${answer(randomNum, randomNumSecond, randomElement)}\nLet's try again, ${userName}!`);
        }  
    }
    return console.log(`Congratulations, ${userName}!`);
};