/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import * as Message from '../constants/Message';

function CartItem(props) {

    var { product, quantity } = props.cart_item;
    var { onDeleteCartItem, onAddToCart, onChangeMessage } = props;

    return (
        <tr>
            <th scope="row">
                <img src={product.image}
                    alt="" className="img-fluid z-depth-0" />
            </th>
            <td>
                <h5>
                    <strong>{product.name}</strong>
                </h5>
            </td>
            <td>{product.price}$</td>
            <td className="center-on-small-only">
                <span className="qty">{quantity} </span>
                <div className="btn-group radio-group" data-toggle="buttons">
                    <label
                        className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                        onClick={() => minusPlusQuantity(-1)}
                    >
                        <a>—</a>
                    </label>
                    <label
                        className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                        onClick={() => minusPlusQuantity(1)}
                    >
                        <a>+</a>
                    </label>
                </div>
            </td>
            <td>{product.price * quantity}$</td>
            <td>
                <button
                    onClick={() =>  onDelelte()}
                    type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
                    title="" data-original-title="Remove item">
                    X
            </button>
            </td>
        </tr>
    );

    function onDelelte () {
        onDeleteCartItem(product.id);
        onChangeMessage(Message.MSG_PRODUCT_IN_CART_SUCCESS);
    }

    function minusPlusQuantity(number) {
        
        if ((quantity + number) < 0 || (quantity + number) > product.inventory) {
            return;
        }
        onAddToCart(product, number);
        onChangeMessage(Message.MSG_UPDATE_CART_SUCCESS)

    }
}



export default CartItem;
