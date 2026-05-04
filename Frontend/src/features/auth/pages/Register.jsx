import React, { useState } from 'react'
import { Link  , useNavigate} from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

const Register = () => {

    const [ username, setUsername ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")

    
      const { handleRegister , loading } = useAuth()
      const navigate = useNavigate()

      
        if (loading) {
        return (
            <div className="loading-screen">
                <h1 className="loading-inline">
                     <span className="spinner small"></span>
                </h1>
            </div>
        )
    }



    async function handleSubmit(e){
        e.preventDefault()
        handleRegister(username , email , password)
        .then(res => {
                navigate("/")
        })
       .catch(err =>{
        console.log(err);
       })
    }

    return (
        <main>
            <div className="form-container">
                <h1>Register</h1>
                <form onSubmit={handleSubmit} >
                    <input
                        onChange={(e) => { setUsername(e.target.value) }}
                        type="text"
                        name='username'
                        placeholder='Enter username' />
                    <input
                        onChange={(e) => { setEmail(e.target.value) }}
                        type="text"
                        name='email'
                        placeholder='Enter email' />
                    <input
                        onChange={(e) => { setPassword(e.target.value) }}
                        type="password"
                        name='password'
                        placeholder='Enter password' />
                    <button>Register</button>
                </form>

                <p>Already have an account? <Link className='toggleAuthForm' to="/login">Login</Link></p>
            </div>
        </main>
    )
}

export default Register