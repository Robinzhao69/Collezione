import {Switch, Route} from "react-router-dom"
import Collectionpage from "../Pages/Collectionpage/Collectionpage"
import Homepage from "../Pages/Homepage/Homepage"
import './App.css'

const App = () => {
    return(
        <>
            <Switch>
                <Route path="/Collection">
                    <Collectionpage />
                </Route>
                <Route path="/">
                    <Homepage />
                </Route>
            </Switch>
        </>
    )
}

export default App;