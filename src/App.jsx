import { useState } from 'react'
import Authenticate from './components/authenticate'
import SignUpForm from './components/signupform'
import './App.css'

function App() {

  return (
    <>
      <Authenticate />
      <SignUpForm />
    </>
  )
}

export default App
