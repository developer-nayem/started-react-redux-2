import React from 'react';

const Product = (props) => {
    const {addToCart, product} = props;
    const productStyle = {
        border: '1px solid #80a7f5',
        margin: '10px',
        backgroundColor: '#80a7f5',
        borderRadius: '5px',
        boxShadow: '5px 5px 5px rgb(66, 64, 64)'
    }
    return (
        <div style={productStyle}>
            <h5> {product.name}</h5>
            <button onClick={() => addToCart(product.id, product.name)}
            >Add to cart</button>
        </div>
    );
};

export default Product;