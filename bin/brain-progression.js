import generateGameData from '../src/games/brain-progression';
import consoleInteract from '../src/userInteraction.js';

const questionsInTest = 3;
const txtDescription = () => 'What number is missing in the progression?';
const gameData = generateGameData(questionsInTest);
consoleInteract(txtDescription, gameData);
