let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let highestNumbers = [0];

for  (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] > highestNumbers) {
    highestNumbers = numbers[index];
  }
}

console.log(highestNumbers);