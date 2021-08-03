import { consoleInteract, generateGameData, setQuestionCount } from '../index.js';
import getRandomInt from '../utils.js';

const gameDescription = 'What number is missing in the progression?';
setQuestionCount(3);
const progressionStepMin = 2;
const progressionStepMax = 10;
const progressionStartMin = 1;
const progressionStartMax = 5;
const progressionSizeMin = 5;
const progressionSizeMax = 10;

// Generate array of progression
// generateProgression() : [3, 6, 9, 12, 15, 18 ...and so on]
const genProgression = (start = 3, size = 10, step = 3) => {
  const acc = [];
  for (let i = 0; i < size; i += 1) {
    acc.push(step * i + start);
  }
  return acc;
};

const genDataItem = () => {
  const step = getRandomInt(progressionStepMin, progressionStepMax);
  const start = getRandomInt(progressionStartMin, progressionStartMax);
  const size = getRandomInt(progressionSizeMin, progressionSizeMax);
  const progression = genProgression(start, size, step);
  const rndIndex = getRandomInt(0, progression.length - 1);
  const answer = progression[rndIndex].toString();
  progression[rndIndex] = '..';
  const question = progression.join(' ');

  return [question, answer];
};

const startGame = () => {
  const gameData = generateGameData(genDataItem);
  consoleInteract(gameDescription, gameData);
};

export default startGame;
