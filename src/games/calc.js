const description = 'What is the result of the expression?';
const makeRound = () => {
  const num1 = Math.floor(Math.random() * 100);
  const num2 = Math.floor(Math.random() * 10);
  const operators = ['+', '-', '*'];
  const operator = operators[Math.floor(Math.random() * operators.length)];
  let correctAnswer;
  switch (operator) {
    case '+':
      correctAnswer = String(num1 + num2);
      break;
    case '-':
      correctAnswer = String(num1 - num2);
      break;
    case '*':
      correctAnswer = String(num1 * num2);
      break;
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
  const question = `${num1} ${operator} ${num2}`;
  return [question, correctAnswer];
}

export { description, makeRound };