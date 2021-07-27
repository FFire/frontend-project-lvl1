import consoleInteract from '../index.js';
import getRandomInt from '../utils.js';

const questionsInTest = 3;
const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

// genDataItem = ['question 1', 'yes'] OR ['question 2', 'no']
const genDataItem = () => {
  const question = getRandomInt(1, 11);
  const answer = isEven(question) ? 'yes' : 'no';
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
