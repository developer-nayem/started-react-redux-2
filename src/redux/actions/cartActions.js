export const ADD_TO_CARD = 'ADD_TO_CARD';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';


export const addToCart = id => {
    return {type: ADD_TO_CARD, id }
}
export const removeFromCart = id => {
    return { type: REMOVE_FROM_CART, id }
}

