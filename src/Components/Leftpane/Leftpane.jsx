import React, { useState } from 'react'
import './Leftpane.css'


function Leftpane(props) {

    const [editMode, setEditMode] = useState(false)

    let editButtonClicked = () => {
        setEditMode(true)
    }

    let saveButtonClicked = () => {
        setEditMode(false)
    }


    let info = <>
                <p>test</p>
                <p>test</p>
                <p>test</p>
                <p>test</p>
                </>
    if(editMode === true){
       info = <>
                <section className='info__form--container'>
                    <input className='info__form' type="text" placeholder='Titel'/> 
                    <input className='info__form' type="text" placeholder='Omschrijving'/>
                    <input className='info__form' type="text" placeholder='Prijs'/>
                </section>            
              </>
    }

    let button = <button className='info__btn' onClick={editButtonClicked}>Edit</button>
    if(editMode === true){
        button = <button className='info__btn' onClick={saveButtonClicked}>Opslaan</button>
    }
    
    return (
        <section className='info__wrapper'>
            <div className='img__wrapper'>
                <img className='info__img' src="/img/forza.jpg" alt="" />
            </div>           
            {info}
            {button}
        </section>
    )
}

export default Leftpane