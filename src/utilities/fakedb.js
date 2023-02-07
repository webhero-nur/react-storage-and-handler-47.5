// use localStorage to manage cart data
const addTODb = id => {
    let shoppingCart = {};

    // get the shopping cart from local storage
    const storedCart = localStorage.getItem('my-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }

    // add quantity
    const quantity = shoppingCart[id];
    if (quantity) {
        shoppingCart[id] = quantity + 1;
    }
    else {
        shoppingCart[id] = 1;
    }

    localStorage.setItem('my-cart', JSON.stringify(shoppingCart));
}

const removeFromDb = id => {
    const storedCart = localStorage.getItem('my-cart');
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart);
        if (id in shoppingCart) {
            delete shoppingCart[id];
            localStorage.setItem('my-cart', JSON.stringify(shoppingCart));
        }
    }

}

const deleteCart = () => {
    localStorage.removeItem('my-cart');
}

export {
    addTODb,
    removeFromDb,
    deleteCart
};