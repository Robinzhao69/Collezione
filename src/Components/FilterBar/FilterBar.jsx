import './FilterBar.css'


import React from 'react'

const FilterBar = (props) => {

    const shareButtonClicked = () => [
        navigator.clipboard.writeText(window.location.href)
    ]
    return (
        <>
            <section className='buttonBar'> 
                <div className='filterButtonWrapper'>
                    <button className='Buttons' onClick={() => props.onChange("Racing")}>Racing</button>
                    <button className='Buttons' onClick={() => props.onChange("Sandbox")}>Sandbox</button>
                    <button className='Buttons' onClick={() => props.onChange("All")}>All</button>
                </div>
                <div className='shareWrapper'>
                    <button onClick={() => shareButtonClicked()} className='Buttons'>Share</button>
                </div>                
            </section>
        </>
    )
}

export default FilterBar