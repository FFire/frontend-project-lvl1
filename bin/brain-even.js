import generateGameData from '../src/games/brain-even.js';
import consoleInteract from '../src/index.js';

const questionsInTest = 3;
const txtDescription = () => 'Answer "yes" if the number is even, otherwise answer "no".';
const gameData = generateGameData(questionsInTest);
consoleInteract(txtDescription, gameData);
