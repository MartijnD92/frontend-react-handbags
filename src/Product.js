import React from 'react';

function Product({ name, label, image, price }) {
    return (
    <article>
        <span>{label}</span>
        <img src={image} alt={`the ${name} bag`}/>
        <p>The {name} bag</p>
        <h4>{`€ ${price}`}</h4>
    </article>
    )
}

export default Product;