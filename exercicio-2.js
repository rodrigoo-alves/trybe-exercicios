const number1 = 11;
const number2 = 10;
const number3 = 10;

if (number1 > number2 && number1 > number3) {
  console.log("O numero 1 é maior que o numero 2 e o numero 3");
} else if (number2 > number1 && number2 > number3) {
  console.log("O numero 2 é maior que o numero 1 e o numero 3");
} else if ( number3 > number1 && number3 > number2){
  console.log("O numero 3 é maior que o numero 1 e o numero 2");
} else {
  console.log("Os tres numeros sao iguais");
}

