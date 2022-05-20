const pizzas = [
    {flavor: 'Frango', price: 12.20},
    {flavor: 'Carne', price: 20.5},
    {flavor: 'Calabresa', price: 10},
    {flavor: 'Marguerita', price: 12.40}
];

const funcaoPrecoMenorQue13 = () => pizzas.some( (pizza) => pizza.price < 13);

console.log (funcaoPrecoMenorQue13());