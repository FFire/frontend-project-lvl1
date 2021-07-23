import action from '../userInteraction.js';

const startGame = () => {
  const txtDescription = () => 'Answer "yes" if the number is even, otherwise answer "no".';
  const questions = ['qestion 1', 'qestion 2', 'qestion 3'];
  const answers = ['1', '2', '3'];

  action(txtDescription, questions, answers);
};

export default startGame;
