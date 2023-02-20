import { generateNumber } from '../utils.js';

const generateProgression = (first, diff, length) => {
    const progression = [];
    for (let i = 0; i < length; i += 1) {
        progression.push(first + i * diff);
    }
    return progression;
};

const generateRound = () => {
    const first = generateNumber(1, 10);
    const diff = generateNumber(1, 10);
    const progression = generateProgression(first, diff, 10);
    const missingIndex = generateNumber(0, progression.length - 1);
    const answer = String(progression[missingIndex]);
    progression[missingIndex] = '..';
    const question = progression.join(' ');
    return [question, answer];
};
const description = 'What number is missing in the progression?';

export { generateRound, description };
