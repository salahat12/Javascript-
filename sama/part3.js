const numbers = [3, 5, 8, 12, 20];
const allPositive = numbers.every(num => num > 0);
const allEven = numbers.every(num => num % 2 === 0);
const allLessThan50 = numbers.every(num => num < 50);
console.log(allPositive);
console.log(allEven);
console.log(allLessThan50);
