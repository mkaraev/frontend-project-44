import { generateNumber } from '../utils.js';

const isPrime = (number) => {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i <= Math.floor(Math.sqrt(number)); i += 1) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
};

const generateRound = () => {
    const number = generateNumber(1, 100);
    const question = String(number);
    const answer = isPrime(number) ? 'yes' : 'no';
    return [question, answer];
};
const description = 'What is the result of the expression?';

export { generateRound, description };
