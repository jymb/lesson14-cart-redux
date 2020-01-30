/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function Products(props) {
    return (

        <section className="section">
            <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
            <div className="row">
                {
                   props.children
                }
            </div>
        </section>
    );


}

export default Products;
