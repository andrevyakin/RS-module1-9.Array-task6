const numbers = [10, 4, 100, -5, 54, 2];

let sum = 0;
for (let i = 0; i < numbers.length; i++)
    sum += numbers[i] ** 3;
console.log(sum);

sum = 0;
for (const number of numbers)
    sum += number ** 3;
console.log(sum);

sum = 0;
numbers.forEach(i => sum += i ** 3);
console.log(sum);

sum = 0;
sum = numbers.reduce((acc, el) =>
        acc + el ** 3
    , 0)
console.log(sum);