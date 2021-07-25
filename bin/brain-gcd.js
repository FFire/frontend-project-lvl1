import generateGameData from '../src/games/brain-gcd.js';
import consoleInteract from '../src/userInteraction.js';

const questionsInTest = 3;
const txtDescription = () => 'Find the greatest common divisor of given numbers.';
const gameData = generateGameData(questionsInTest);
consoleInteract(txtDescription, gameData);
