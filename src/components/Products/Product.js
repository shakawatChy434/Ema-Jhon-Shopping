import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Product.css'
import Rating from 'react-rating';


const Product = (props) => {
    // console.log(props)
    const { name, img, price, seller, stock, star } = props.product
    /* Font Awesome icon  */

    return (
        <div className="card-info">
            <div className="card-img">
                <img src={img} alt="Product images can not found." />
            </div>
            <div>
                <h2 className="card-details">{name}</h2>
                <p>by: {seller} </p>
                <p>Price : $ {price}</p>
                {/* Add Star */}
                <Rating
                    stop={5}
                    initialRating={star}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                ></Rating> <br />
                <Rating
                    stop={1}
                    emptySymbol="fab fa-facebook ficon-color"
                    fullSymbol="fas fa-star ficon-color"
                ></Rating>
                <br />

                <small>Only {stock} left in stock - order soon .</small> <br />
                <button onClick={() => props.handleAddToCard(props.product)} className="purchase-btn"><FontAwesomeIcon icon={faShoppingCart} /> add to card</button>
            </div>
        </div >
    );
};
export default Product;