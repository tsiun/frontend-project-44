console.log('even.js loaded');

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const makeRound = () => {
  const question = Math.floor(Math.random() * 100);
  const correctAnswer = (question % 2 === 0) ? 'yes' : 'no';
  return [question, correctAnswer];
}

console.log('description:', description);
console.log('makeRound type:', typeof makeRound);

export { description, makeRound };