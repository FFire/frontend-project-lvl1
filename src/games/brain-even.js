import { consoleInteract, generateGameData } from '../index.js';
import { getRandomInt, isEven } from '../utils.js';

const questionsInTest = 3;
const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

// genDataItem = ['question 1', 'yes'] OR ['question 2', 'no']
const genDataItem = () => {
  const minRnd = 1;
  const maxRnd = 10;
  const question = getRandomInt(minRnd, maxRnd);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

const startGame = () => {
  const gameData = generateGameData(questionsInTest, genDataItem);
  consoleInteract(gameDescription, gameData);
};

export default startGame;
