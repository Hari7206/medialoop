import React from 'react'
import {useNavigate} from 'react-router-dom'
import "../../shared/button.scss"


function Nav() {

    const navigate = useNavigate()
  return (
   <nav className='nav-bar'>
    <p>Insta</p>
    <button className='button primary button'
    onClick={()=>{
        navigate("/create-post")
    }}
    >new Post</button>
   </nav>
  )
}

export default Nav