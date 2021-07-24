import readlineSync from 'readline-sync';

const txtWelcome = () => 'Welcome to the Brain Games!';
const txtWhatIsYourName = () => 'May I have your name? ';
const txtHello = (userName) => `Hello, ${userName}!`;
const txtCongratuation = (userName) => `Congratulations, ${userName}!`;
const txtQuestion = (question) => `Question: ${question} `;
const txtAnswer = (yourAnswer) => `Your answer: ${yourAnswer}`;
const txtCorrect = () => 'Correct!';
const txtNonCorrect = (userName, userAnswer, answer) => {
  const line = `${userAnswer} is wrong answer ;(. Correct answer was ${answer}.`;
  return line;
};
const txtGoodBye = (userName) => `Let's try again, ${userName}!`;

const getUserName = () => {
  console.log(txtWelcome());
  return readlineSync.question(txtWhatIsYourName());
};

const action = (txtDescription, questions, answers) => {
  const userName = getUserName();
  console.log(txtHello(userName));
  console.log(txtDescription());

  for (let i = 0; i < questions.length; i += 1) {
    const question = questions[i];
    const answer = answers[i];
    const userAnswer = readlineSync.question(txtQuestion(question));
    if (userAnswer === answer) {
      console.log(txtAnswer(userAnswer));
      console.log(txtCorrect());
    } else {
      console.log(txtNonCorrect(userAnswer, answer));
      console.log(txtGoodBye(userName));
      return;
    }
  }
  console.log(txtCongratuation(userName));
};

export default action;
