import getRandomInt from './getRandomInt.js';

const gcd = (a, b) => (!b ? a : gcd(b, a % b));

const generateGcdArray = (gcdBase) => {
  const upLimit = 50;
  const acc = [];

  for (let arg1 = gcdBase + 1; arg1 < upLimit; arg1 += 1) {
    for (let arg2 = gcdBase + 1; arg2 < upLimit; arg2 += 1) {
      if (gcd(arg1, arg2) === gcdBase) acc.push([arg1, arg2]);
    }
  }

  return acc;
};

// game data generator of qestions and right answers
// gameData = [['question 1', 'yes'],['question 2', 'no'],['question 3', 'yes']]
const generateGameData = (questionsInTest) => {
  const gameData = [];

  for (let i = 0; i < questionsInTest; i += 1) {
    const item = [];
    const gcdBase = getRandomInt(2, 11);
    const gcdArray = generateGcdArray(gcdBase);
    const gcdArrayRandomIndex = getRandomInt(-1, gcdArray.length);
    const [arg1, arg2] = gcdArray[gcdArrayRandomIndex];
    const qestion = `${arg1} ${arg2}`;
    const answer = gcdBase;

    item.push(qestion);
    item.push(answer.toString());
    gameData.push(item);
  }

  return gameData;
};

export default generateGameData;
