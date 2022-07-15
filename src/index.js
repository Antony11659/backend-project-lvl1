export const gameLogic = (acc, question, answer, fanc, userName) => {
    if(question == answer){
        console.log(`Correct!`);
        fanc(acc+1);
    } else {
        acc = 0;
        console.log(`${question} is wrong answer ;(. Correct answer was ${answer}`)
        console.log(`Let's try again, ${userName}!`);
    }
};

export const startRule = (round, rule) => {
    if (round === 0) {
        console.log(rule);
    }
};

export const makeRandomNum = (num) => Math.round(Math.random() * num );