import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import Card from '../Card/Card';
import Product from '../Products/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    /* State for card */
    /* Work for Card  (Declare  State for Card ) */
    const [cart, setCart] = useState([]);
    /* Work for input field handler  (Declare State for Handler ) */
    const [displaySeacrhProducts, setDisplaySearchProducts] = useState([])


    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                /* Work in input field handler  (Set State Function) */
                setDisplaySearchProducts(data);
            });
    }, []);
    /* Add Handler */
    /* Work for Card  Haldler */
    const handleAddToCard = (product) => {
        // console.log(product.name)
        /* Copy full array for declaring UseState for Card & Also added every single product */
        const newCart = [...cart, product]
        /* Set Card State function. */
        setCart(newCart)
    }
    /* Work for input field handler */
    const inputHandler = (event) => {
        const searchText = event.target.value;
        const matchProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        /* Work in input field handler  (Set State Function) */
        setDisplaySearchProducts(matchProducts);
        console.log(matchProducts.length)
    }

    return (
        <div className="container">
            {/* Work in input field handler Start */}
            <div className="search-filed">
                <input onChange={inputHandler} className="input-feild" type="text" placeholder="Please Search your favourite things." />
            </div>
            {/* Work in input field handler End. */}

            <div className="shop-container" >
                <div className="porduct-container">
                    {/* <h2>Product Loaded :{products.length} </h2> */}
                    {/* {
                    console.log(products)
                } */}
                    {
                        // products.slice(36, 81).map(product => <Product
                        displaySeacrhProducts.slice(0, 81).map(product => <Product
                            key={product.key}
                            product={product}
                            /* Add handler */
                            handleAddToCard={handleAddToCard}
                        >
                        </Product>)
                    }
                </div>
                {/* Show Products Part End.  */}
                <div>
                    <Card cart={cart}></Card>
                </div>
            </div>
        </div>
        /* Show Products Part Start */

    );
};

export default Shop;