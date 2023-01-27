import React from 'react'
import { useState, useEffect } from 'react'
import './InputForm.css'

function InputForm(props) {

    const [titleInput, setTitleInput] = useState("")
    const [descriptionInput, setDescriptionInput] = useState("")
    const [priceInput, setPriceInput] = useState("")

    useEffect(() => {
        setTitleInput(props.cardClicked.title)
        setDescriptionInput(props.cardClicked.description)
        setPriceInput(props.cardClicked.price)
    }, [props])

    const eventTitleInput = (e) => {
        setTitleInput(e.target.value)
    }

    const eventDescriptionInput = (e) => {
        setDescriptionInput(e.target.value)
    }

    const eventPriceInput = (e) => {
        setPriceInput(e.target.value)
    }

    const addProduct = () => {
        if (titleInput !== "") {
            props.addButtonClicked(titleInput, descriptionInput, priceInput)
        }
    }

    const editProduct = () => {
        props.editButtonClicked(titleInput, descriptionInput, priceInput) 
    }

    let button = <button onClick={addProduct} className='info__btn' >voeg toe</button>
    if(props.setEditMode === true){
        button = <button onClick={editProduct} className='info__btn' >edit</button>
    }

    return (
        <>
            <section className='info__form--container'>
                <input className='info__form' type="text" value={titleInput} onChange={eventTitleInput} placeholder='Titel' />
                <textarea className='info__form info__form--desc' type="text" value={descriptionInput} onChange={eventDescriptionInput} placeholder='Omschrijving' />
                <input className='info__form' type="text" value={priceInput} onChange={eventPriceInput} placeholder='Prijs' />
            </section>
            {button}
        </>

    )
}

export default InputForm