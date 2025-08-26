import readlineSync from 'readline-sync';
import askName from './cli.js';

const runGame = (description, makeRound, roundsCount = 3) => {
  const userName = askName();
  console.log(`Hello, ${userName}!`);
  console.log(description);
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = makeRound();
    console.log(`Question: ${question}`)
    const userAnswer = readlineSync.question('Your answer: ');

    //Win condition
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    }
    //Lose condition
    else {
      console.log(`'${userAnswer}' is wrong answer. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
}
export default runGame;

