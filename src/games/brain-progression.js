import getRandomInt from './getRandomInt.js';

// Generate array of progression
// generateProgression() : [3, 6, 9, 12, 15, 18 ...and so on]
const genProgression = () => {
  const step = getRandomInt(1, 10);
  const start = getRandomInt(1, 5);
  const size = getRandomInt(5, 12);
  const acc = [];

  for (let i = 0; i < size; i += 1) {
    acc.push(step * i + start);
  }

  return acc;
};

function genDataItem() {
  const progression = genProgression();
  const rndIndex = getRandomInt(0, progression.length);
  const answer = progression[rndIndex].toString();
  progression[rndIndex] = '..';
  const qestion = progression.join(' ');

  return [qestion, answer];
}

// game data generator of qestions and right answers
// gameData = [['3 6 .. 12 15 18', '9'], [...], [...]]
const generateGameData = (questionsInTest) => {
  const gameData = [];

  for (let i = 0; i < questionsInTest; i += 1) {
    const dataItem = genDataItem();
    gameData.push(dataItem);
  }

  return gameData;
};

export default generateGameData;
