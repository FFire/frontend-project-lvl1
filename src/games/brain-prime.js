import consoleInteract from '../index.js';
import getRandomInt from './getRandomInt.js';

const questionsInTest = 3;
const txtDescription = () => 'Answer "yes" if given number is prime. Otherwise answer "no".';

// https://stackoverflow.com/a/40200710/87713
const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

// genDataItem = ['question 1', 'yes']
function genDataItem() {
  const minRnd = 1;
  const maxRnd = 31;
  const qestion = getRandomInt(minRnd, maxRnd);
  const answer = isPrime(qestion) ? 'yes' : 'no';
  return [qestion, answer];
}

// game data generator of qestions and right answers
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
  consoleInteract(txtDescription, gameData);
};

export default startGame;
