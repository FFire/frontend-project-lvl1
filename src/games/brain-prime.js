import { consoleInteract, generateGameData } from '../index.js';
import getRandomInt from '../utils.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const gameMinNumber = 1;
const gameMaxNumber = 31;

const isPrime = (num) => {
  // Sub that check cache result of prime numbers
  // TODO remove this comment
  // Если по этому участку кода будут замечания, двай обсудим
  // Просто я не вижу принципиальной разницы между гардом только на значение 2
  // и гардом на десяток часто используемых значений
  // Для улучшения читаемости выделил код кэша в отдельную функцию
  const getCachedResult = (arg) => {
    const preCalcNonPrimes = [1, 4, 6, 8, 9, 10];
    const preCalcPrimes = [2, 3, 5, 7];
    if (preCalcNonPrimes.includes(arg)) return false;
    if (preCalcPrimes.includes(arg)) return true;
    return undefined;
  };

  // Guard to speed up calculation
  if (num < 2) return false;
  const cachedResult = getCachedResult(num);
  if (cachedResult !== undefined) return cachedResult;

  // Core calculation is number prime https://stackoverflow.com/a/40200710/87713
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
