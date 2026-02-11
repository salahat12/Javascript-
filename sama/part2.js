const scores = [95, 40, 82, 67, 100, 51, 30];
const passingScores = scores.filter(scores=>scores>=50);
const excellentScores = scores.filter(score => score >= 90);
const oddScores = scores.filter(score => score % 2 !== 0);
console.log(passingScores);
console.log(excellentScores);
console.log(oddScores);