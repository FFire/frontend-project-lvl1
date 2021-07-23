// import readlineSync from 'readline-sync';

// const txtWelcome = () => 'Welcome to the Brain Games!';
// const txtWhatIsYourName = () => 'May I have your name?';
// const txtHello = (userName) => `Hello, ${userName}!`;
// const txtCongratuation = (userName) => `Congratulations, ${userName}!`;
// const txtQuestion = (question) => `Question: ${question}`;
// const txtAnswer = (yourAnswer) => `Your answer: ${yourAnswer}`;
// const txtCorrect = () => 'Correct!';
// const txtNonCorrect = (userName, yourAnswer, correctAnswer) => {
//   const line1 = `${yourAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`;
//   const line2 = `Let's try again, ${userName}!`;
//   return `${line1}\n\r${line2}`;
// };

const action = (questions, answers) => {
  // for (let i = 0; i < questions.length; i += 1) {
  //   const question = questions[i];
  //   const answer = answers[i];
  // }
  console.log(`q:${questions} --- a: ${answers}`);
};
export default action;
