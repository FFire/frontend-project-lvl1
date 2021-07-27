import consoleInteract from '../index.js';
import getRandomInt from './getRandomInt.js';

const questionsInTest = 3;
const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// https://stackoverflow.com/a/40200710/87713
const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

// genDataItem = ['question 1', 'yes']
const genDataItem = () => {
  const minRnd = 1;
  const maxRnd = 31;
  const question = getRandomInt(minRnd, maxRnd);
  const answer = isPrime(question) ? 'yes' : 'no';
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
  consoleInteract(description, gameData);
};

export default startGame;
