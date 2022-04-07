let number = [];

for (let index = 1; index <= 25; index += 1) {
  number.push(index);
}
console.log(number);

for (let index2 = 0; index2 < number.length; index2 += 1) {
  console.log(number[index2] / 2);
}
