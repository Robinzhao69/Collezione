import NavBar from '../Navigation/NavBar';
import Homepage from '../Homepage/Homepage';
import Info from '../Info/Info';
import FeaturePage from '../FeaturePage/FeaturePage';
import Membership from '../Membership/Membership';

import './App.css'

const App = () => {
    return(
        <>
            <NavBar />
            <Homepage />
            <Info />
            <FeaturePage />
            <Membership />
        </>
    )
}

export default App;