/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function CartResult(props) {
    return (
        <tr>
            <td colSpan="3"></td>
            <td>
                <h4>
                    <strong>Tổng Tiền</strong>
                </h4>
            </td>
            <td>
                <h4>
                    <strong>{props.total}$</strong>
                </h4>
            </td>
            <td colSpan="3">
                <button type="button" className="btn btn-primary waves-effect waves-light">Complete purchase
                                <i className="fa fa-angle-right right"></i>
                </button>
            </td>
        </tr>
    );
}

export default CartResult;
