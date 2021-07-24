import getRandomInt from './getRandomInt.js';

const actions = [
  [' + ', (arg1, arg2) => arg1 + arg2],
  [' - ', (arg1, arg2) => arg1 - arg2],
  [' * ', (arg1, arg2) => arg1 * arg2],
];

// game data generator of qestions and right answers
// gameData = [['question 1', 'yes'],['question 2', 'no'],['question 3', 'yes']]
const generateGameData = (questionsInTest) => {
  const gameData = [];

  for (let i = 0; i < questionsInTest; i += 1) {
    const item = [];
    const arg1 = getRandomInt(1, 11);
    const arg2 = getRandomInt(1, 11);
    const actionIndex = getRandomInt(0, actions.length);

    // qestion = "7 * 7" ... "4 - 6" ... "9 + 4"
    const qestion = `${arg1}${actions[actionIndex][0]}${arg2}`;
    const func = actions[actionIndex][1];
    const answer = func(arg1, arg2);
    item.push(qestion);
    item.push(answer.toString());
    gameData.push(item);
  }

  return gameData;
};

export default generateGameData;
