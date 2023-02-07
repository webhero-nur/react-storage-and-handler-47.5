import React, { useEffect, useState } from 'react';
import { getTotal } from '../../utilities/calculate';
import { deleteCart } from '../../utilities/fakedb';
import Cosmetic from '../Cosmetic/Cosmetic';

const Cosmetics2 = () => {
    const [cosmetics, setCosmetics] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCosmetics(data))
    }, []);

    const total = getTotal(cosmetics);

    return (
        <div>
            <h1>Welcome to my cosmetics2 store</h1>
            <p>Money needed: {total}</p>
            {
                cosmetics.map(cosmetic => <Cosmetic
                    key={cosmetic.id}
                    cosmetic={cosmetic}
                ></Cosmetic>)
            }
            <button onClick={deleteCart}>Delete All from Cart</button>
        </div>
    );
};

export default Cosmetics2;