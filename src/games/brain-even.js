import { consoleInteract, generateGameData } from '../index.js';
import getRandomInt from '../utils.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
const questionsInTest = 3;
const gameMinNumber = 1;
const gameMaxNumber = 10;

// Is number is even
const isEven = (num) => num % 2 === 0;

// genDataItem = ['question 1', 'yes'] OR ['question 2', 'no']
const genDataItem = () => {
  const question = getRandomInt(gameMinNumber, gameMaxNumber);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

const startGame = () => {
  const gameData = generateGameData(questionsInTest, genDataItem);
  consoleInteract(gameDescription, gameData);
};

export default startGame;
