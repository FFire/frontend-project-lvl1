import { consoleInteract, generateGameData } from '../index.js';
import { getRandomInt } from '../utils.js';

const questionsInTest = 3;
const gameDescription = 'What number is missing in the progression?';

// Generate array of progression
// generateProgression() : [3, 6, 9, 12, 15, 18 ...and so on]
const genProgression = () => {
  const step = getRandomInt(2, 10);
  const start = getRandomInt(1, 5);
  const size = getRandomInt(5, 10);
  const acc = [];

  for (let i = 0; i < size; i += 1) {
    acc.push(step * i + start);
  }

  return acc;
};

const genDataItem = () => {
  const progression = genProgression();
  const rndIndex = getRandomInt(0, progression.length - 1);
  const answer = progression[rndIndex].toString();
  progression[rndIndex] = '..';
  const question = progression.join(' ');

  return [question, answer];
};

const startGame = () => {
  const gameData = generateGameData(questionsInTest, genDataItem);
  consoleInteract(gameDescription, gameData);
};

export default startGame;
