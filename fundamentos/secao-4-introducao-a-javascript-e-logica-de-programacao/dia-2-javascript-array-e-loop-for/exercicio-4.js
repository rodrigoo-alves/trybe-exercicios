let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let count = 0;
let average = 0;

for (let index = 0; index < numbers.length; index += 1) {
  count += numbers[index] ;  
}

average = count / numbers.length;
if (average > 20) {
  console.log('valor maior que 20');
} else {
  console.log('valor menor ou igual a 20');
}