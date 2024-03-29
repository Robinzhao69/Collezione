import './ProductCards.css'

import React from 'react'

function ProductCards(props) {

    const productCardClicked = () => {
        props.onCardClicked(props.id);
    }

    
    return (
        <li onClick={productCardClicked} className="productsList__item productsList__item--gray">
            <img className="productsList__img" src={props.productImg} alt={props.title} />
            <div className="productsList__fade">
                <p className="productsList__imageText">{props.name}</p>
            </div>
        </li>
    )
}

export default ProductCards