import getRandomInt from './getRandomInt.js';

// game data generator of qestions and right answers
// gameData = [['question 1', 'yes'],['question 2', 'no'],['question 3', 'yes']]
const generateGameData = (questionsInTest) => {
  const gameData = [];

  for (let i = 0; i < questionsInTest; i += 1) {
    const item = [];
    const qestion = getRandomInt(1, 11);
    const answer = qestion % 2 === 0 ? 'yes' : 'no';
    item.push(qestion);
    item.push(answer);
    gameData.push(item);
  }

  return gameData;
};

export default generateGameData;
