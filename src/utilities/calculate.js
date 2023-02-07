function add(first, second) {
    return first + second;
}

const multiply = (first, second) => {
    return first * second;
}

const subtract = (first, second) => {
    return first - second;
}

const divide = (first, second) => {
    return first / second;
}

const remainder = (first, second) => {
    return first % second;
}


/* 
// reducer in array
const numbers = [65, 49, 68, 41, 96];
const sumReducer = (previous, current) => previous + current;
const total = numbers.reduce(sumReducer, 0); */

/* 
// reducer in array of objects
const items = [
    {id: 1, name: 'Alta', price: 100},
    {id: 2, name: 'Alta', price: 100},
    {id: 3, name: 'Alta', price: 100},
    {id: 1, name: 'Alta', price: 100},
    {id: 1, name: 'Alta', price: 100},
]

const itemSumReducer = (previous, current) => previous + current.price;
const itemTotal = items.reduce(itemSumReducer, 0);
 */

const getTotalPrice = products => {
    const reducer = (previous, current) => previous + current.price;
    const total = products.reduce(reducer, 0);
    return total;
}

export {
    add,
    multiply,
    subtract,
    divide,
    remainder,
    getTotalPrice as getTotal
};