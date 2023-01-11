import React from 'react'
import Placeholder from '../Placeholder/Placeholder'
import ProductCards from '../ProductCards/ProductCards'
import './Rightpane.css'

function Rightpane(props) {

    let onCardClicked = (idFromCard) => {
        props.onProductCardClicked(idFromCard)
    }
 
    let productCardsToBeRendered = props.productCards.map(product => {
        if(product.name === "Placeholder"){
            return <Placeholder id={product.id} buttonSymbol="+" buttonText="Voeg product toe" onCardClicked={onCardClicked} />
        }
        return <ProductCards  key={product.id} id={product.id} name={product.name} productImg={product.img} onCardClicked={onCardClicked}/> 
    })
    return (
        <>
            <section className="productsWrapper">
                <header className="collection__header">
                    <h1 className="header__h1">Collectie</h1>
                </header>

                <ul className="productsList">
                    {productCardsToBeRendered}
                </ul>
            </section>    
        </>
    )
}

export default Rightpane