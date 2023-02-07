// use localStorage to manage cart data
const addTODb = id => {
    let shoppingCart;

    // get the shopping cart
    const storedCart = localStorage.getItem('my-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    else {
        shoppingCart = {};
    }

    // add quantity
    const quantity = shoppingCart[id];
    if (quantity) {
        const newQuantity = +quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    else {
        shoppingCart[id] = 1;
    }

    localStorage.setItem('my-cart', JSON.stringify(shoppingCart));
}

export { addTODb };