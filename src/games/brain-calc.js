import getRandomInt from './getRandomInt.js';

const actions = [
  [' + ', (arg1, arg2) => arg1 + arg2],
  [' - ', (arg1, arg2) => arg1 - arg2],
  [' * ', (arg1, arg2) => arg1 * arg2],
];

function genDataItem() {
  const minRnd = 1;
  const maxRnd = 11;
  const arg1 = getRandomInt(minRnd, maxRnd);
  const arg2 = getRandomInt(minRnd, maxRnd);
  const rndIndex = getRandomInt(0, actions.length);

  // qestion = "7 * 7" ... "4 - 6" ... "9 + 4"
  const qestion = `${arg1}${actions[rndIndex][0]}${arg2}`;
  const mathFunc = actions[rndIndex][1];
  const answer = mathFunc(arg1, arg2).toString();
  return [qestion, answer];
}

// game data generator of qestions and right answers
// gameData = [['question 1', 'yes'],['question 2', 'no'],['question 3', 'yes']]
const generateGameData = (questionCount) => {
  const gameData = [];
  for (let i = 0; i < questionCount; i += 1) {
    const dataItem = genDataItem();
    gameData.push(dataItem);
  }

  return gameData;
};

export default generateGameData;
