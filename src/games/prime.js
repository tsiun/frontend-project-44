const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const makeRound = () => {
  const question = Math.floor(Math.random() * 200);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  function isPrime(num) {
    if (num < 2) return false;
    else if (num === 2) return true;
    else if (num % 2 === 0 && num > 2) return false;
    else {
      for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
      }
      return true;
    }
  }
  return [question, correctAnswer];
}

export { description, makeRound };