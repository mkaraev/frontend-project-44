import { generateNumber } from '../utils.js';

const calc = (a, b, op) => {
  let result = null;
  if (op === '+') {
    result = a + b;
  } else if (op === '-') {
    result = a - b;
  } else if (op === '*') {
    result = a * b;
  }
  return result;
};

const generateRound = () => {
  const a = generateNumber(1, 100);
  const b = generateNumber(1, 100);
  const operations = '+-*';
  const op = operations[generateNumber(0, 2)];
  const question = `${a} ${op} ${b}`;
  const answer = String(calc(a, b, op));
  return [question, answer];
};
const description = 'What is the result of the expression?';

export { generateRound, description };
