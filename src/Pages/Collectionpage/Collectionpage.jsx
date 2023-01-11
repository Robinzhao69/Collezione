import { useState, useEffect } from 'react';
import NavBar from '../../Components/Navigation/NavBar';
import Rightpane from '../../Components/Rightpane/Rightpane';
import Leftpane from '../../Components/Leftpane/Leftpane';
import Footer from '../../Components/Footer/Footer';
import productsObject from '../../data/products';
import './Collectionpage.css'

function Collectionpage() {
    const [productCards, setProductCards] = useState(productsObject)
    const [open, setOpen] = useState(true)
    const [cardClicked, setCardClicked] = useState({})
    


    let onCardClicked = (idFromCard) => {
        setCardClicked(productCards[idFromCard - 1])
    }

    
    return (
        <>
            <NavBar />
            <article className='dashboard'>
                <Leftpane />
                <Rightpane onProductCardClicked={onCardClicked} productCards={productCards} />            
            </article>
            <Footer />
        </>
    )
}

export default Collectionpage