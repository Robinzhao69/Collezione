import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { filterGamesByTitle, filterGamesByPlatform } from '../../helpers/filterGames'
import { games } from '../../data/games'
import './Form.css'

const Form = (props) => {

    const [inputs, setInputs] = useState([
        {
            id: "title",
            value: "",
            label: "Title",
            filter: filterGamesByTitle
        },
        {
            id: "platforms",
            value: "",
            label: "platform",
            filter: filterGamesByPlatform
        }
    ])

    let dispatch = useDispatch()

    const onInputChanged = (event) => {
        let copy = [...inputs]
        copy.map(input => {
            if (input.id === event.target.id) {
                input.value = event.target.value
            }
        })
        setInputs(copy)
    }

    const inputsToBeRendered = inputs.map(objectFromStateArray => {
        return (
            <div key={objectFromStateArray.id} className="form__wrapper">
                <label htmlFor={objectFromStateArray.id} className="form__label">{objectFromStateArray.label}</label>
                <input id={objectFromStateArray.id} value={objectFromStateArray.value} type="text" onChange={onInputChanged} className="form__input" />
            </div>
        )
    })

    const submit = (event) => {
        event.preventDefault();
        let result = games
        inputs.forEach(input => {
            result = input.filter(input.value, result)
        })
        props.setSearchClicked()
        dispatch({
            type: "FILTEREDGAMES",
            payload: result
        })
    }

    return (
        <form className="form" onSubmit={submit}>
            <div className="form__inputsWrapper">
                {inputsToBeRendered}
            </div>
            <button className="form__search" onClick={submit}>zoeken</button>
        </form>
    )
}

export default Form