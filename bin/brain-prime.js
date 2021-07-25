import generateGameData from '../src/games/brain-prime.js';
import consoleInteract from '../src/index.js';

const questionsInTest = 3;
const txtDescription = () => 'Answer "yes" if given number is prime. Otherwise answer "no".';
const gameData = generateGameData(questionsInTest);
consoleInteract(txtDescription, gameData);
