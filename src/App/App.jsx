import { Routes, Route} from "react-router-dom"
import { useState } from "react"
import Backlog from "../Pages/Backlog/Backlog"
import Login from "../Login/Login"
import Collectionpage from "../Pages/Collectionpage/Collectionpage"
import Homepage from "../Pages/Homepage/Homepage"
import './App.css'

const App = () => {
    const [loggedIn, setloggedIn] = useState(false)

    console.log(loggedIn)
    const loginPassed = () => {
        setloggedIn(true) 
    }
    return(
        <>
            <Routes>
                <Route path="/login" element={<Login loginPassed={loginPassed}/>}/>
                <Route path="/backlog" element={<Backlog />} />
                <Route path="/user/:id/collection" element={<Collectionpage />} />
                <Route path="/" element={<Homepage/>} />
            </Routes>
        </>
    )
}

export default App;