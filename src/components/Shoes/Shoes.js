import React from 'react';
import { add, divide, multiply, remainder, subtract } from '../../utilities/calculate';

const Shoes = () => {
    const first = 55;
    const second = 44;
    const result = multiply(first, second);
    const sum = add(first, second);
    const sub = subtract(first, second);
    const divideResult = divide(first, second);
    const remain = remainder(first, second);
    return (
        <div>
            <h3>This is Shoes Compo</h3>
            <p>Result: {result} and Total: {sum}</p>
            <p>Subtract: {sub} and Divide: {divideResult}</p>
            <p>Remainder: {remain}</p>
        </div>
    );
};

export default Shoes;