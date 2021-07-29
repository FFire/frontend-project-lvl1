import { consoleInteract, generateGameData } from '../index.js';
import getRandomInt from '../utils.js';

const gameDescription = 'What number is missing in the progression?';
const questionsInTest = 3;
const progressionStepMin = 2;
const progressionStepMax = 10;
const progressionStartMin = 1;
const progressionStartMax = 5;
const progressionSizeMin = 5;
const progressionSizeMax = 10;

// Generate array of progression
// generateProgression() : [3, 6, 9, 12, 15, 18 ...and so on]
const genProgression = () => {
  const step = getRandomInt(progressionStepMin, progressionStepMax);
  const start = getRandomInt(progressionStartMin, progressionStartMax);
  const size = getRandomInt(progressionSizeMin, progressionSizeMax);
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
