import getRandomInt from './getRandomInt.js';

// https://stackoverflow.com/a/40200710/87713
const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

// game data generator of qestions and right answers
// gameData = [['question 1', 'yes'],['question 2', 'no'],['question 3', 'yes']]
const generateGameData = (questionsInTest) => {
  const gameData = [];

  for (let i = 0; i < questionsInTest; i += 1) {
    const item = [];
    const qestion = getRandomInt(0, 31);
    const answer = isPrime(qestion) ? 'yes' : 'no';
    item.push(qestion);
    item.push(answer);
    gameData.push(item);
  }

  return gameData;
};

export default generateGameData;
