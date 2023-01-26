import { Routes, Route} from "react-router-dom"
import Backlog from "../Pages/Backlog/Backlog"
import Collectionpage from "../Pages/Collectionpage/Collectionpage"
import Homepage from "../Pages/Homepage/Homepage"
import './App.css'

const App = () => {
    return(
        <>
            <Routes>
                <Route path="/Backlog" element={<Backlog />} />
                <Route path="/Collection" element={<Collectionpage />} />
                <Route path="/" element={<Homepage/>} />
            </Routes>
        </>
    )
}

export default App;