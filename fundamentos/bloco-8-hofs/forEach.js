
// Retorne uma array com o valor da primeira array multiplicado por 3

const array1 = [5, 8, 10, 52, 4, 6, 78];
const array2 = [];

array1.forEach( (number) => array2.push(number * 3))

console.log(array1);
console.log(array2);


// -------------------------------------------------
// forEach com Objetos
// -------------------------------------------------

    // Imprima os nomes das pizzas e os valores dela.

const pizzas = [
    {flavor: 'Frango', price: 12.20},
    {flavor: 'Carne', price: 20.5},
    {flavor: 'Calabresa', price: 10},
    {flavor: 'Marguerita', price: 12.40}
];

pizzas.forEach( (pizza) => console.log(`A pizza de ${pizza.flavor} custa ${pizza.price}`));