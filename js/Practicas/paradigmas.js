const numbers = [1,2,3,4,5,6,7,8,9,10];

const numberSuma = numbers.filter((number) => number % 2 === 0).reduce((pos, number) => pos + number, 0);

console.log(numberSuma);