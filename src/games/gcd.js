const description = 'Find the greatest common divisor of given numbers.';
const makeRound = () => {
  const getGCD = (a, b) => {
    let temp
    while (b !== 0) {
      temp = b
      b = a % b
      a = temp
    }
    return a
  };

  const num1 = Math.floor(Math.random() * 100) + 1;
  const num2 = Math.floor(Math.random() * 100) + 1;
  const question = `${num1} ${num2}`;
  const correctAnswer = String(getGCD(num1, num2));
  return [question, correctAnswer];
}

export { description, makeRound }