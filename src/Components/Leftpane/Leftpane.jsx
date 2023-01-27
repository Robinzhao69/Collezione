import React from 'react'
import InputForm from '../InputForm/InputForm'
import './Leftpane.css'


function Leftpane(props) {  
    
    let addClicked = (titleFromInput, descFromInput, priceFromInput) => {
        props.addButtonClicked(titleFromInput, descFromInput, priceFromInput)    
    }

    let editClicked = (titleFromInput,descFromInput, priceFormInput) => {
        props.editButtonClicked(titleFromInput, descFromInput, priceFormInput)
    }

    return (
        <section className='info__wrapper'>
            <div className='img__wrapper'>
                <img className='info__img' src="/img/forza.webp" alt="" />
            </div>           
            <InputForm setAddMode={props.addMode} setEditMode={props.editMode} addButtonClicked={addClicked} editButtonClicked={editClicked} cardClicked={props.onCardClicked}/>
        </section>
    )
}

export default Leftpane