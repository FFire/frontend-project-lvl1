import { consoleInteract, generateGameData, setQuestionCount } from '../index.js';
import getRandomInt from '../utils.js';

const gameDescription = 'What is the result of the expression?';
setQuestionCount(3);
const gameMinNumber = 1;
const gameMaxNumber = 10;

const actions = [
  ['+', (arg1, arg2) => arg1 + arg2],
  ['-', (arg1, arg2) => arg1 - arg2],
  ['*', (arg1, arg2) => arg1 * arg2],
];
const genDataItem = () => {
  const arg1 = getRandomInt(gameMinNumber, gameMaxNumber);
  const arg2 = getRandomInt(gameMinNumber, gameMaxNumber);
  const rndIndex = getRandomInt(0, actions.length - 1);

  // question = "7 * 7" ... "4 - 6" ... "9 + 4"
  const [mathSign, mathFunc] = actions[rndIndex];
  const question = `${arg1} ${mathSign} ${arg2}`;
  const answer = mathFunc(arg1, arg2).toString();
  return [question, answer];
};

const startGame = () => {
  const gameData = generateGameData(genDataItem);
  consoleInteract(gameDescription, gameData);
};

export default startGame;
