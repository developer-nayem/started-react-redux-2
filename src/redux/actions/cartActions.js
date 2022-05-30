export const ADD_TO_CARD = 'ADD_TO_CARD';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';


export const addToCart = (id, name) => {
    return {type: ADD_TO_CARD, id, name }
}
export const removeFromCart = cartId => {
    return { type: REMOVE_FROM_CART, cartId }
}

