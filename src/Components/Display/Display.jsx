import './Display.css'
import { useSelector } from 'react-redux'

import React from 'react'

const Display = (props) => {

    const filteredGames = useSelector(state => { return state })
    let randIndex
    let randProduct

    let card = <section key="" className='display'></section>

    if(props.searchClick === true){
        randIndex = Math.floor(Math.random() * filteredGames.length)
        randProduct = filteredGames[randIndex]
        card = 
            <section key={randProduct?.title} className='display'>
                <h2>{randProduct?.title}</h2>
            </section>
    }
  
    return (
        <>
            {card}
        </>
    )
}

export default Display