import React from 'react'
import NavBar from '../../Components/Navigation/NavBar';
import Startpage from '../../Components/Startpage/Startpage';
import Info from '../../Components/Info/Info';
import FeaturePage from '../../Components/FeaturePage/FeaturePage';
import Membership from '../../Components/Membership/Membership';


function Homepage() {
    return (
        <>
            <NavBar />
            <Startpage />
            <Info />
            <FeaturePage />
            <Membership /> 
            <p>hallo</p>
        </>
    )
}

export default Homepage