import React from 'react'
import NavBar from '../../Components/Navigation/NavBar'
import { useState } from 'react'
import Form from '../../Components/Form/Form'
import Display from '../../Components/Display/Display'
import "./Backlog.css"
import Footer from '../../Components/Footer/Footer'

const Backlog = () => {
    const [searchClick, setSearchClicked] = useState(false)
    console.log(searchClick)
    const onSearchClicked = () => {
        setSearchClicked(true)
    }


    return (
        <>
            <NavBar />
            <section className='backlogWrapper'>
                <Form setSearchClicked={onSearchClicked} />
                <div className='displayWrapper'>
                    <Display searchClick={searchClick}/>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Backlog