import readlineSync from 'readline-sync';

const consoleInteract = (gameDescription, gameData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ', { defaultInput: 'Sam' });
  console.log(`Hello, ${userName}!`);
  console.log(gameDescription);

  // loop through qwestions in [gameData] and ask them and check answers
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

export default consoleInteract;
