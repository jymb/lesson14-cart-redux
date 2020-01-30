/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import * as Message from '../constants/Message';

function Product(props) {
    var { name, image, description, price, rating } = props.product;

    var showRating = (rating) => {
        if (rating > 5) rating = 5;
        var result = [];
        for (let index = 0; index < rating; index++) {
            result.push(<li key={index}><i className="fa fa-star"></i></li>);
        }

        for (let index = rating; index < 5; index++) {
            result.push(<li key={index}><i className="fa fa-star-o"></i></li>);
        }

        return result;
    }

    var onAddToCartThis = () => {
        props.onAddToCart(props.product);
        props.onChangeMessage(Message.MSG_ADD_TO_CART_SUCCESS);
    }

    return (
        <div className="col-lg-4 col-md-6 mb-r">
            <div className="card text-center card-cascade narrower">
                <div className="view overlay hm-white-slight z-depth-1 center">
                    <img src={image}
                        className="img-fluid image-product" alt="" />
                    <a>
                        <div className="mask waves-light waves-effect waves-light"></div>
                    </a>
                </div>
                <div className="card-body">
                    <h4 className="card-title">
                        <strong>
                            <a>{name}</a>
                        </strong>
                    </h4>
                    <ul className="rating">
                        {showRating(rating)}
                    </ul>
                    <p className="card-text">
                        {description}
                    </p>
                    <div className="card-footer">
                        <span className="left">{price}$</span>
                        <span className="right">
                            <a 
                                onClick={()=>onAddToCartThis()}
                                className="btn-floating blue-gradient" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add to Cart">
                                <i className="fa fa-shopping-cart"></i>
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );


}


export default Product;
