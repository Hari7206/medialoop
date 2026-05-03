import React from 'react'
import { useState } from 'react'
import axios from "axios"
import { Link, Navigate, useNavigate } from 'react-router'
import { useAuth } from '../hooks/useAuth'
import "../styles/form.scss"
function Login() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const { handleLogin, loading } = useAuth()
    const Navigate = useNavigate()


    if (loading) {
        return (
            <div className="loading-screen">
                <h1 className="loading-inline">
                     <span className="spinner small"></span>
                </h1>
            </div>
        )
    }

    async function handleSubmit(e) {
        e.preventDefault()

        handleLogin(username, password)
            .then(res => {
                console.log(res);
                Navigate("/")
            })
            .catch(err => {
                console.log(err);
            });


    }

    return (

        <main>
            <div className='form-container'>
                <h1>Login</h1>
                <form
                    onSubmit={handleSubmit}
                >

                    <input
                        onInput={(e) => { setUsername(e.target.value) }}
                        type="text"
                        name='username'
                        placeholder='Enter your username'
                    />
                    <input type="text"
                        onInput={(e) => { setPassword(e.target.value) }}
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