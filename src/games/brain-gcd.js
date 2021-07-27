import consoleInteract from '../index.js';
import { getRandomInt, calculateGCD } from '../utils.js';

const questionsInTest = 3;
const gameDescription = 'Find the greatest common divisor of given numbers.';

const genDataItem = () => {
  const minRnd = 2;
  const maxRnd = 25;
  const arg1 = getRandomInt(minRnd, maxRnd);
  const arg2 = getRandomInt(minRnd, maxRnd);

  const question = `${arg1} ${arg2}`;
  const answer = calculateGCD(arg1, arg2).toString();

  return [question, answer];
};

// game data generator of questions and right answers
// gameData = [['6 9', '3'], ['12 16', '4'], ['25 50', '5']]
const generateGameData = () => {
  const gameData = [];

  for (let i = 0; i < questionsInTest; i += 1) {
    const dataItem = genDataItem();
    gameData.push(dataItem);
  }

  return gameData;
};

const startGame = () => {
  const gameData = generateGameData();
  consoleInteract(gameDescription, gameData);
};

export default startGame;
