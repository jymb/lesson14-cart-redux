/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Cart from '../components/Cart';
import CartItem from '../components/CartItem';
import CartResult from '../components/CartResult';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as Message from '../constants/Message';
import { actDeleteCartItem, actAddToCart, actChangeMessage } from '../actions/index';


function CartContainer(props) {
    var { cart } = props;

    return (
        <Cart>
            {showCart(cart, props)}
            {showCartResult(cart)}
        </Cart>
    );
}

function showCart(cart, props) {
    var { onDeleteCartItem, onAddToCart, onChangeMessage } = props;
    var result = <tr>
                    <td>{Message.MSG_CART_EMPTY}</td>
                </tr>;

    if (cart.length > 0) {
        result = cart.map((cart_item, index) => {
            return <CartItem 
                        key={index} 
                        cart_item={cart_item}
                        onDeleteCartItem = {onDeleteCartItem}
                        onAddToCart = {onAddToCart}
                        onChangeMessage = {onChangeMessage}
                    />
        })
    }

    return result;
}

function showCartResult(cart) {

    var result = null;
    if (cart.length > 0) {
        result = <CartResult total={totalPriceCart(cart)} />
    }

    return result;

}

function totalPriceCart(cart) {
    var total = 0;
    cart.map((cart_item, index) => {
        return total += cart_item.quantity * cart_item.product.price
    })
    return total
}

CartContainer.propTypes = {
    cart: PropTypes.arrayOf(
        PropTypes.shape({
            product: PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                inventory: PropTypes.number.isRequired,
                rating: PropTypes.number.isRequired
            }),
            quantity: PropTypes.number.isRequired
        })
    ).isRequired
};

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteCartItem : (id) => {
            dispatch(actDeleteCartItem(id))
        },

        onAddToCart : (product, quantity) => {
            dispatch(actAddToCart(product, quantity))
        },

        onChangeMessage : (message) => {
            dispatch(actChangeMessage(message));
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
