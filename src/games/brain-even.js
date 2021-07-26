import consoleInteract from '../index.js';
import getRandomInt from './getRandomInt.js';

const questionsInTest = 3;
const txtDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

// genDataItem = ['question 1', 'yes'] OR ['question 2', 'no']
function genDataItem() {
  const qestion = getRandomInt(1, 11);
  const answer = isEven(qestion) ? 'yes' : 'no';
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
