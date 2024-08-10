import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Home from './Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  

import Footer from './Footer.jsx'
import MeetTheTeam from './MeetTheTeam.jsx';
function App() {

  return (
    <>
    <Router>
    <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about-us' element={<MeetTheTeam/>}/>
          </Routes>
      <Footer/>
    </Router>
     
    </>
  )
}

export default App
