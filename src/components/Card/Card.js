import React from 'react';
import './Card.css'

const Card = (props) => {
    // console.log(props).
    /* Calculation Total Price */
    /* Distructring cart */
    const { cart } = props;
    let total = 0;
    for (const product of cart) {
        total = total + product.price
    }
    const shipping = total > 0 ? 15 : 0;
    let totalBeforeText = (total + shipping);
    let tex = (totalBeforeText * .10);

    return (
        <div>
            {/* Show Card Part Start.  */}
            <div className="card-container">
                <div className="card-heading">
                    <h4>Order Summary</h4>
                    <h5>Items Ordered :{props.cart.length} </h5>
                </div>
                <div className="card-ite">
                    <h6>Items:</h6>
                    <h6>Shipping & Handling: ${shipping.toFixed(2)} </h6>
                    <h6>Total Before Tex: ${totalBeforeText.toFixed(2)}</h6>
                    <h6>Estimated Tex : ${tex.toFixed(2)} </h6>
                    <h4>Order Total : ${total.toFixed(2)} </h4>
                </div>
            </div>
            {/* Show Card Part End.  */}
        </div>
    );
};

export default Card;