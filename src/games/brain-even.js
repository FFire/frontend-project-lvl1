import action from '../userInteraction.js';
import getRandomInt from './getRandomInt.js';

const startGame = () => {
  const questionsInTest = 3;
  const txtDescription = () => 'Answer "yes" if the number is even, otherwise answer "no".';
  const questions = [];
  const answers = [];
  for (let i = 0; i < questionsInTest; i += 1) {
    const qestion = getRandomInt(1, 11);
    const answer = qestion % 2 === 0 ? 'yes' : 'no';
    questions.push(qestion);
    answers.push(answer);
  }

  action(txtDescription, questions, answers);
};

export default startGame;
