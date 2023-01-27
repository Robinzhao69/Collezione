import React from 'react'
import NavBar from '../../Components/Navigation/NavBar'
import Form from '../../Components/Form/Form'
import Display from '../../Components/Display/Display'
import "./Backlog.css"
import Footer from '../../Components/Footer/Footer'

const Backlog = () => {


    return (
        <>
            <NavBar />
            <section className='backlogWrapper'>
                <Form />
                <div className='displayWrapper'>
                    <Display />
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Backlog