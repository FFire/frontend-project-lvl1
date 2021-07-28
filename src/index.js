import readlineSync from 'readline-sync';

// game data generator of questions and right answers
// gameData = [['question 1', 'yes'],['question 2', 'no'],['question 3', 'yes']]
export const generateGameData = (questionsInTest, genDataItem) => {
  const gameData = [];
  for (let i = 0; i < questionsInTest; i += 1) {
    const dataItem = genDataItem();
    gameData.push(dataItem);
  }

  return gameData;
};

export const consoleInteract = (gameDescription, gameData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ', { defaultInput: 'Sam' });
  console.log(`Hello, ${userName}!`);
  console.log(gameDescription);

  // loop through questions in [gameData] and ask them and check answers
  // eslint-disable-next-line no-restricted-syntax
  for (const [question, answer] of gameData) {
    const userAnswer = readlineSync.question(`Question: ${question} `);
    const isAnswerCorrect = userAnswer === answer;

    // Not correct answer guard
    if (!isAnswerCorrect) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log(`Your answer: ${userAnswer}`);
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
