import { consoleInteract, generateGameData } from '../index.js';
import getRandomInt from '../utils.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';
const gameMinNumber = 2;
const gameMaxNumber = 25;

// calculate GCD for pair of numbers
const calcGCD = (a, b) => (!b ? a : calcGCD(b, a % b));

const genDataItem = () => {
  const arg1 = getRandomInt(gameMinNumber, gameMaxNumber);
  const arg2 = getRandomInt(gameMinNumber, gameMaxNumber);

  const question = `${arg1} ${arg2}`;
  const answer = calcGCD(arg1, arg2).toString();

  return [question, answer];
};

const startGame = () => {
  const gameData = generateGameData(genDataItem);
  consoleInteract(gameDescription, gameData);
};

export default startGame;
