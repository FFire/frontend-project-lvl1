import { consoleInteract, generateGameData } from '../index.js';
import { calcGCD, getRandomInt } from '../utils.js';

const questionsInTest = 3;
const gameDescription = 'Find the greatest common divisor of given numbers.';

const genDataItem = () => {
  const minRnd = 2;
  const maxRnd = 25;
  const arg1 = getRandomInt(minRnd, maxRnd);
  const arg2 = getRandomInt(minRnd, maxRnd);

  const question = `${arg1} ${arg2}`;
  const answer = calcGCD(arg1, arg2).toString();

  return [question, answer];
};

const startGame = () => {
  const gameData = generateGameData(questionsInTest, genDataItem);
  consoleInteract(gameDescription, gameData);
};

export default startGame;
