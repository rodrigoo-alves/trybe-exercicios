let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let count = 0;

for (let index = 0; index < numbers.length; index += 1) {
  count += numbers[index] ;
}

let average = count / numbers.length;
console.log(average);