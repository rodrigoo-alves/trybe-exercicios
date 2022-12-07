let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let oddNumbers = [];

for  (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 === 1) {
    oddNumbers.push(numbers[index]);
  }
}

console.log(oddNumbers);