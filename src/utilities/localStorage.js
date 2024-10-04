const getStoredCart = () => {
    const storedCartString = localStorage.getItem('cart');
    if (storedCartString) {
        return JSON.parse(storedCartString)
    }
    return [];
}

const saveCartToLS = cart =>{
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}
const revomeFromLS = id =>{
    const cart = getStoredCart();
    const remaining = cart.filter(idx=> idx !== id);
    saveCartToLS(remaining)
}

const addToLS = id =>{
    const cart = getStoredCart();
    cart.push(id);

    saveCartToLS(cart);
}

export {addToLS,getStoredCart,revomeFromLS}