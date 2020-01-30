import * as types from '../constants/ActionType';


var data = JSON.parse(localStorage.getItem('CART'))
var initialState = data ? data : [];


const cart = (state = initialState, action) => {
    var { product, quantity, id } = action;
    var index = -1;
    switch(action.type) {
        case types.ADD_TO_CART :
            index = findProductInCart(state, product);

            if(index !== -1){
                if(state[index].quantity !== product.inventory)
                    state[index].quantity += quantity;
            }else{
                state.push({
                    product,
                    quantity
                });
            }

            localStorage.setItem('CART', JSON.stringify(state))

            return [...state];

        
        case types.DELETE_CART_ITEM :
            index = findProductInCartByID(state, id);
            if(index !== -1){
                state.splice(index, 1)
            }

            localStorage.setItem('CART', JSON.stringify(state))
            
            return [...state];
            
            
        default : return [...state];
    }
}

var  findProductInCart = (cart, product) => {
    var index = -1;
    if(cart.length > 0){
        for (let i = 0; i < cart.length; i++) {
            const element = cart[i];
            if(element.product.id === product.id){
                index = i;
                break;
            }
            
        }
    }

    return index;
}

var  findProductInCartByID = (cart, id) => {
    var index = -1;
    if(cart.length > 0){
        for (let i = 0; i < cart.length; i++) {
            const element = cart[i];
            if(element.product.id === id){
                index = i;
                break;
            }
            
        }
    }

    return index;
}

export default cart;