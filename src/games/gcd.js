import { generateNumber } from '../utils.js';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const generateRound = () => {
  const a = generateNumber(1, 100);
  const b = generateNumber(1, 100);
  const question = `${a} ${b}`;
  const answer = String(gcd(a, b));
  return [question, answer];
};
const description = 'Find the greatest common divisor of given numbers.';

export { generateRound, description };
