import './Login.css'
import React from 'react'
import NavBar from '../Components/Navigation/NavBar'
import Footer from '../Components/Footer/Footer'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import users from '../data/users'



const Login = (props) => {
    const navigate = useNavigate()

    const [username, setUsername] = useState("")
    const [pass, setPass] = useState("")

    const userInput = (e) => {
        setUsername(e.target.value)
    }
    const passInput = (e) => {
        setPass(e.target.value)
    }

    const loginSubmit = (e) => {
        e.preventDefault()

        users.map(user => {
            if (username === user.name && pass === user.password) {
                navigate("/user/" + user.id + "/collection")
                props.loginPassed()
            }
        })

    }

    return (
        <>
            <NavBar />
            <div className='login-bg'>
                <form className='loginWrapper'>
                    <div className='loginInputsWrapper'>
                        <label htmlFor="">User</label>
                        <input onChange={userInput} value={username} className='loginInputs' type="text" placeholder='Username' />
                        <label htmlFor="">Password</label>
                        <input onChange={passInput} value={pass} className='loginInputs' type="text" placeholder='Password' />
                    </div>
                    <button onClick={loginSubmit} className='loginButton'>Login</button>
                </form>
            </div>
            <Footer />
        </>

    )
}

export default Login