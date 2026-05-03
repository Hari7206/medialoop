import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { AuthProvider } from './features/auth/auth.context.jsx'
import Approutes from './Approutes'
import './style.scss'

function App() {
  return (
    <AuthProvider>
  <Approutes/>
    </AuthProvider>
  )
}

export default App