let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultSoma = 0;

for (let index = 0; index < numbers.length; index += 1) {
  resultSoma += numbers[index];
}

let average = resultSoma / numbers.length;
console.log(average);
