import consoleInteract from '../index.js';
import { getRandomInt } from '../utils.js';

const questionsInTest = 3;
const gameDescription = 'What is the result of the expression?';

const actions = [
  [' + ', (arg1, arg2) => arg1 + arg2],
  [' - ', (arg1, arg2) => arg1 - arg2],
  [' * ', (arg1, arg2) => arg1 * arg2],
];

const genDataItem = () => {
  const minRnd = 1;
  const maxRnd = 10;
  const arg1 = getRandomInt(minRnd, maxRnd);
  const arg2 = getRandomInt(minRnd, maxRnd);
  const rndIndex = getRandomInt(0, actions.length - 1);

  // question = "7 * 7" ... "4 - 6" ... "9 + 4"
  const mathSign = actions[rndIndex][0];
  const mathFunc = actions[rndIndex][1];
  const question = `${arg1}${mathSign}${arg2}`;
  const answer = mathFunc(arg1, arg2).toString();
  return [question, answer];
};

// game data generator of questions and right answers
// gameData = [['question 1', 'yes'],['question 2', 'no'],['question 3', 'yes']]
const generateGameData = () => {
  const gameData = [];
  for (let i = 0; i < questionsInTest; i += 1) {
    const dataItem = genDataItem();
    gameData.push(dataItem);
  }

  return gameData;
};

const startGame = () => {
  const gameData = generateGameData();
  consoleInteract(gameDescription, gameData);
};

export default startGame;
