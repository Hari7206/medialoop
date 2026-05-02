import React from 'react'
import { useState } from 'react'
import axios from "axios"
import { Link } from 'react-router'
import "../styles/form.scss"
function Login() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")


async function handleSubmit(e) {
    e.preventDefault()

    axios.post("http://localhost:3000/api/auth/login", {
        username,
        password
    }, {
        withCredentials: true
    })
    .then(res => {
        console.log("LOGIN SUCCESS:", res.data)
    })
    .catch(err => {
        console.log("LOGIN FAILED:", err.response?.data || err.message)
    })
}
    return (

        <main>
            <div className='form-container'>
                <h1>Login</h1>
                <form
                    onSubmit={handleSubmit}
                >

                    <input
                        onInput={(e) => {setUsername(e.target.value)}}
                        type="text"
                        name='username'
                        placeholder='Enter your username'
                    />
                    <input type="text"
                        onInput={(e) => {setPassword(e.target.value)}}
                        name='password'
                        placeholder='Enter your password'
                    />
                    <button type='submit'>Login</button>
                </form>
                <p>Don't have an account  <Link to={"/register"} className='toggleAuthForm'>Register</Link></p>
            </div>
        </main>
    )
}

export default Login