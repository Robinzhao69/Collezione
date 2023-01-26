import './Display.css'
import { useSelector } from 'react-redux'

import React from 'react'

const Display = () => {

    const filteredGames = useSelector(state => { return state })
    console.log(filteredGames)
    let firstToBeRendered = false
    const titlesToBeRendered = filteredGames.map(game => {
        if (firstToBeRendered === false) {
            firstToBeRendered = true
            return (
                <section key={game} className='display'>
                    <h2>{game.title}</h2>
                </section>
            )
        }
        return (
            <section key={game} className='display'>
                <h2>{game.title}</h2>
            </section>
        )
    })
    return (
        <>
            {titlesToBeRendered}
        </>
    )
}

export default Display