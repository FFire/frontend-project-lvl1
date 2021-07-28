import { consoleInteract, generateGameData } from '../index.js';
import { getRandomInt, isPrime } from '../utils.js';

const questionsInTest = 3;
const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// genDataItem = ['question 1', 'yes']
const genDataItem = () => {
  const minRnd = 1;
  const maxRnd = 31;
  const question = getRandomInt(minRnd, maxRnd);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

const startGame = () => {
  const gameData = generateGameData(questionsInTest, genDataItem);
  consoleInteract(gameDescription, gameData);
};

export default startGame;
