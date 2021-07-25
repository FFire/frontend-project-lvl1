import getRandomInt from './getRandomInt.js';

// Generate array of progression
// generateProgression() : [3, 6, 9, 12, 15, 18 ...and so on]
const generateProgression = () => {
  const step = getRandomInt(1, 10);
  const tmpVal = getRandomInt(1, 5);
  const size = getRandomInt(5, 12);
  const acc = [];

  for (let i = 0; i < size; i += 1) {
    acc.push(step * i + tmpVal);
  }

  return acc;
};

// game data generator of qestions and right answers
// gameData = [['3 6 .. 12 15 18', '9'], [...], [...]]
const generateGameData = (questionsInTest) => {
  const gameData = [];

  for (let i = 0; i < questionsInTest; i += 1) {
    const item = [];
    const progression = generateProgression();
    const progressionRandomIndex = getRandomInt(0, progression.length);
    const answer = progression[progressionRandomIndex];
    progression[progressionRandomIndex] = '..';
    const qestion = progression.join(' ');

    item.push(qestion);
    item.push(answer.toString());
    gameData.push(item);
  }

  return gameData;
};

export default generateGameData;
