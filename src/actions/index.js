import * as types from '../constants/ActionType';

export const actAddToCart = (product, quantity) => {
    return {
        type : types.ADD_TO_CART,
        product,
        quantity
    }
}

export const actChangeMessage = (message) => {
    return {
        type : types.CHANGE_MESSAGE,
        message
    }
}

export const actDeleteCartItem = (id) => {
    return {
        type : types.DELETE_CART_ITEM,
        id
    }
}
