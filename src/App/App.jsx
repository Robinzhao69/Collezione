import NavBar from '../Components/Navigation/NavBar';
import Homepage from '../Pages/Homepage/Homepage';
import Info from '../Components/Info/Info';
import FeaturePage from '../Components/FeaturePage/FeaturePage';
import Membership from '../Components/Membership/Membership';

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