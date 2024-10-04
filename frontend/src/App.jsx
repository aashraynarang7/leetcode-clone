import { useState } from 'react'
import './App.css'
import Landing from './components/Landing.jsx'
import { initializeApp } from "firebase/app";
import Signin from './components/Signin.jsx'


const App=()=> {

  return (
    <>
      <div>
        <Signin/>
      </div>
    </>
  )
}

export default App;
