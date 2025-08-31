const description = 'What number is missing in the progression?'; 
const makeRound = () => { 
	const start = Math.floor(Math.random() * 100) + 1;
	const step = Math.floor(Math.random() * 10) + 1;
	const length = Math.floor(Math.random() * ((10 - 5) + 1)) + 5;
	const gapIndex = Math.floor(Math.random() * length)
	let progression = []
	
	for (let i = 0; i < length; i++) {
		progression.push(start + i * step)
	}
	const correctAnswer = String(progression[gapIndex])
	progression[gapIndex] = ".."
	const question = progression.join(" ")
	
	return [question, correctAnswer]
	
}

export { description, makeRound };