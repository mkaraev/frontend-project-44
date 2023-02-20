import readlineSync from 'readline-sync';

const rounds = 3;

const runGame = (game) => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log(game.description);
    for (let round = 0; round < rounds; round += 1) {
        const [question, answer] = game.generateRound();
        console.log(`Question: ${question}`);
        const userAnswer = readlineSync.question('Your answer: ');
        if (answer !== userAnswer) {
            console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}.`);
            console.log(`Let's try again, ${name}!`);
            return;
        }
        console.log('Correct!');
    }
    console.log(`Congratulation, ${name}!`);
};

export default runGame;
