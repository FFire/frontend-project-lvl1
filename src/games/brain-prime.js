import { consoleInteract, generateGameData } from '../index.js';
import getRandomInt from '../utils.js';

const questionsInTest = 3;
const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const gameMinNumber = 1;
const gameMaxNumber = 31;

// Is number is prime https://stackoverflow.com/a/40200710/87713
const isPrime = (num) => {
  // cache of prime numbers
  const preCalcNonPrimes = [1, 4, 6, 8, 9, 10];
  const preCalcPrimes = [2, 3, 5, 7];
  if (preCalcNonPrimes.includes(num)) return false;
  if (preCalcPrimes.includes(num)) return true;

  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

// genDataItem = ['question 1', 'yes']
const genDataItem = () => {
  const question = getRandomInt(gameMinNumber, gameMaxNumber);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

const startGame = () => {
  const gameData = generateGameData(questionsInTest, genDataItem);
  consoleInteract(gameDescription, gameData);
};

export default startGame;
