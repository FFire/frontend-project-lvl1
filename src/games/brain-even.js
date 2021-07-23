import action from '../userInteraction.js';

const startGame = () => {
  const questions = ['qestion 1', 'qestion 2', 'qestion 3'];
  const answers = [1, 2, 3];

  action(questions, answers);
};

export default startGame;
