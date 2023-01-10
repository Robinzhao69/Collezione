import React from 'react'
import NavBar from '../../Components/Navigation/NavBar';
import Rightpane from '../../Components/Rightpane/Rightpane';
import Leftpane from '../../Components/Leftpane/Leftpane';
import './Collectionpage.css'


function Collectionpage() {
    return (
        <>
            <NavBar />
            <article className='dashboard'>
                <Leftpane />
                <Rightpane />            
            </article>
        </>
    )
}

export default Collectionpage