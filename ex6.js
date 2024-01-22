const originalNumbers = [1, 2, 3, 4, 5];

const squaredEvenNumbers = originalNumbers.map(number => (number % 2 === 0) ? number ** 2 : number);

console.log(squaredEvenNumbers);
