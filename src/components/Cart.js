/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function Cart(props) {

    return (
        <section className="section">
            <div className="table-responsive">
                <table className="table product-table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Sản Phẩm</th>
                            <th>Giá</th>
                            <th>Số Lượng</th>
                            <th>Tổng Cộng</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        { props.children }
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default Cart;
