export const ADD = 'ADD';
export const REMOVE = 'REMOVE';


export function addToCart(item) {
    return {
        type : ADD,
        item                               
    }
}

export function removeFromCart(item) {
    return {
        type : REMOVE,
        item
    }
}

