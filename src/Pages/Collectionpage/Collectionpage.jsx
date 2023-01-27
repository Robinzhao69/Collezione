import { useState } from 'react';
import NavBar from '../../Components/Navigation/NavBar';
import Rightpane from '../../Components/Rightpane/Rightpane';
import Leftpane from '../../Components/Leftpane/Leftpane';
import Footer from '../../Components/Footer/Footer';
import productsObject from '../../data/users';
import chooseImage from '../../helpers/chooseImage';
import './Collectionpage.css'
import FilterBar from '../../Components/FilterBar/FilterBar';
import { useParams } from 'react-router-dom';

function Collectionpage() {
    const params = useParams()

    const [productCards, setProductCards] = useState(productsObject[params.id - 1].collection)
    const [addMode, setAddMode] = useState(false)
    const [editMode, setEditMode] = useState(false)
    const [filters, setFilters] = useState("All")
    const [cardClicked, setCardClicked] = useState({})



    let addButtonClicked = (titleFromInput, descFromInput, priceFromInput) => {
        let imageFromHelper = chooseImage(titleFromInput)
        let toBeAdded = 
            {
                id: productCards.length + 1,
                img: imageFromHelper,
                title: titleFromInput,
                category: ["All"],
                description: descFromInput,
                price: priceFromInput,
            }
        

        let copy = [...productCards]

        copy.push(toBeAdded)
        setProductCards(copy)
    }

    let editButtonClicked = (titleFromInput, descFromInput, priceFromInput) => {
        let collectionCards = productCards
        let newState = collectionCards.map(product => {
            if(cardClicked.id === product.id){
                product.title = titleFromInput
                product.description = descFromInput
                product.price = priceFromInput
                return product
            } else {
                return product
            }         
        })
        setProductCards(newState)
    }


    let onCardClicked = (idFromCard) => {
        if(productCards[idFromCard - 1].title === "Placeholder"){
            setAddMode(true)
            setEditMode(false)
            setCardClicked(productCards[idFromCard - 1])
            return
        }
        setAddMode(false)
        setEditMode(true)
        setCardClicked(productCards[idFromCard - 1])  
    }


    return (
        <>
            <NavBar />
            <FilterBar onChange={setFilters} />
            <article className='dashboard'>
                <Leftpane addMode={addMode} editMode={editMode} addButtonClicked={addButtonClicked} editButtonClicked={editButtonClicked} onCardClicked={cardClicked} />
                <Rightpane filter={filters} onProductCardClicked={onCardClicked} productCards={productCards} />
            </article>
            <Footer />
        </>
    )
}

export default Collectionpage