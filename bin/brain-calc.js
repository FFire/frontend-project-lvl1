#!/usr/bin/env node

import generateGameData from '../src/games/brain-calc.js';
import consoleInteract from '../src/index.js';

const questionsInTest = 3;
const txtDescription = () => 'What is the result of the expression?';
const gameData = generateGameData(questionsInTest);
consoleInteract(txtDescription, gameData);
