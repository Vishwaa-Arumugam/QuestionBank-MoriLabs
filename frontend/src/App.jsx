import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Home from './Home'

import Footer from './Footer.jsx'
function App() {

  return (
    <>
      <Navbar/>
      <Home/>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <Footer/>

    
    </>
  )
}

export default App
