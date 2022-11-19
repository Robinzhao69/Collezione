import {Switch, Route} from "react-router-dom"
import Collectionpage from "../Pages/Collectionpage/Collectionpage"
import Homepage from "../Pages/Homepage/Homepage"
import './App.css'

const App = () => {
    return(
        <>
            <Switch>
                <Route path="/Homepage">
                    <Homepage />
                </Route>
                <Route path="/Collection">
                    <Collectionpage />
                </Route>
            </Switch>
        </>
    )
}

export default App;