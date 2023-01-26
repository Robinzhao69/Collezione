import './FilterBar.css'
import productsObject from '../../data/products';


import React from 'react'

const FilterBar = (props) => {

    return (  
        <>
            <section>
                <button onClick={() => props.onChange("Racing")}>Racing</button>
                <button onClick={() => props.onChange("Sandbox")}>Sandbox</button>
                <button onClick={() => props.onChange("All")}>All</button>
            </section>
        </>
    )
}

export default FilterBar