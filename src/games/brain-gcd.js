import getRandomInt from './getRandomInt.js';

// calculate GCD for pair of numbers
const gcd = (a, b) => (!b ? a : gcd(b, a % b));

function genDataItem() {
  const minRnd = 2;
  const maxRnd = 25;
  const arg1 = getRandomInt(minRnd, maxRnd);
  const arg2 = getRandomInt(minRnd, maxRnd);

  const qestion = `${arg1} ${arg2}`;
  const answer = gcd(arg1, arg2).toString();

  return [qestion, answer];
}

// game data generator of qestions and right answers
// gameData = [['6 9', '3'], ['12 16', '4'], ['25 50', '5']]
const generateGameData = (questionsInTest) => {
  const gameData = [];

  for (let i = 0; i < questionsInTest; i += 1) {
    const dataItem = genDataItem();
    gameData.push(dataItem);
  }

  return gameData;
};

export default generateGameData;
