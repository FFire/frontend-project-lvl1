import { consoleInteract, generateGameData } from '../index.js';
import getRandomInt from '../utils.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const gameMinNumber = 1;
const gameMaxNumber = 31;

// Is prime number https://stackoverflow.com/a/40200710/87713
const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

// genDataItem = ['question 1', 'yes']
const genDataItem = () => {
  const question = getRandomInt(gameMinNumber, gameMaxNumber);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

const startGame = () => {
  const gameData = generateGameData(genDataItem);
  consoleInteract(gameDescription, gameData);
};

export default startGame;
