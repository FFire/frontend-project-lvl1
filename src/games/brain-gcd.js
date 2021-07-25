import getRandomInt from './getRandomInt.js';

// calculate GCD for pair of numbers
const gcd = (a, b) => (!b ? a : gcd(b, a % b));

// Generate array of all pairs that give GCD as resault of gcdBase
// generateGcdArray(3) : [[6, 9], [6, 12], [9, 12] ... and so on]
const generateGcdArray = (gcdBase) => {
  const lowLimit = gcdBase + 1;
  const hiLimit = 50;
  const acc = [];

  for (let arg1 = lowLimit; arg1 < hiLimit; arg1 += 1) {
    for (let arg2 = lowLimit; arg2 < hiLimit; arg2 += 1) {
      if (gcd(arg1, arg2) === gcdBase) acc.push([arg1, arg2]);
    }
  }

  return acc;
};

// game data generator of qestions and right answers
// gameData = [['6 9', '3'], ['12 16', '4'], ['25 50', '5']]
const generateGameData = (questionsInTest) => {
  const gameData = [];

  for (let i = 0; i < questionsInTest; i += 1) {
    const item = [];
    // gcdBase is a random namber actually a CGD to start make pair of numbers
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
