import './FilterBar.css'


import React from 'react'

const FilterBar = (props) => {
    return (
        <>
            <section className='filterBar'> 
                        <button className='filterButtons' onClick={() => props.onChange("Racing")}>Racing</button>
                        <button className='filterButtons' onClick={() => props.onChange("Sandbox")}>Sandbox</button>
                        <button className='filterButtons' onClick={() => props.onChange("All")}>All</button>           
            </section>
        </>
    )
}

export default FilterBar