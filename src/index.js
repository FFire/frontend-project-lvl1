import readlineSync from 'readline-sync';

// main loop through questions/answers data
const consoleInteract = (description, gameData) => {
  // sub function -  ask user a question and return is ansewr was right
  const isAnswerCorrect = (question, answer) => {
    const userAnswer = readlineSync.question(`Question: ${question} `);
    if (userAnswer === answer) {
      console.log(`Your answer: ${userAnswer}`);
      console.log('Correct!');
      return true;
    }
    // if user's answer was not correct
    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);
    return false;
  };

  // get user name and say hello to him
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ', {
    defaultInput: 'Johnny Depp',
  });
  console.log(`Hello, ${userName}!`);
  // say test description
  console.log(description);
  // loop through qwestions and ask them
  // eslint-disable-next-line no-restricted-syntax
  for (const [question, answer] of gameData) {
    if (!isAnswerCorrect(question, answer)) {
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  // yea you win!
  console.log(`Congratulations, ${userName}!`);
};

export default consoleInteract;
