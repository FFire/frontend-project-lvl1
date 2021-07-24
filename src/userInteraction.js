import readlineSync from 'readline-sync';

// all strings for game as functions
const txtWelcome = () => 'Welcome to the Brain Games!';
const txtWhatIsYourName = () => 'May I have your name? ';
const txtHello = (userName) => `Hello, ${userName}!`;
const txtCongratuation = (userName) => `Congratulations, ${userName}!`;
const txtQuestion = (question) => `Question: ${question} `;
const txtAnswer = (yourAnswer) => `Your answer: ${yourAnswer}`;
const txtCorrect = () => 'Correct!';
const txtNonCorrect = (userAnswer, answer) => {
  const line = `"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`;
  return line;
};
const txtGoodBye = (userName) => `Let's try again, ${userName}!`;

// get user name and say hello to him
const getUserName = () => {
  console.log(txtWelcome());
  const userName = readlineSync.question(txtWhatIsYourName());
  console.log(txtHello(userName));

  return userName;
};

// ask user a qestion and return is ansewr was right
const isAnswerCorrect = (question, answer) => {
  const userAnswer = readlineSync.question(txtQuestion(question));

  if (userAnswer === answer) {
    console.log(txtAnswer(userAnswer));
    console.log(txtCorrect());
    return true;
  }
  // if user's answer was not correct
  console.log(txtNonCorrect(userAnswer, answer));
  return false;
};

// main loop through qestions/answers data
const consoleInteract = (txtDescription, gameData) => {
  const userName = getUserName();
  console.log(txtDescription());

  // eslint-disable-next-line no-restricted-syntax
  for (const [question, answer] of gameData) {
    if (!isAnswerCorrect(question, answer)) {
      console.log(txtGoodBye(userName));
      return;
    }
  }

  console.log(txtCongratuation(userName));
};

export default consoleInteract;
