import React from 'react'
import NavBar from '../../Components/Navigation/NavBar';
import Startpage from '../../Components/Startpage/Startpage';
import Info from '../../Components/Info/Info';
import FeaturePage from '../../Components/FeaturePage/FeaturePage';
import Membership from '../../Components/Membership/Membership';
import Contact from '../../Components/Contact/Contact';
import Footer from '../../Components/Footer/Footer';


function Homepage() {
    return (
        <>
            <NavBar />
            <Startpage />
            <Info />
            <FeaturePage />
            <Membership /> 
            <Contact /> 
            <Footer />
        </>
    )
}

export default Homepage