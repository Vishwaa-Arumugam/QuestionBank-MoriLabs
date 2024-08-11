import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Home from './Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  

import Footer from './Footer.jsx'
import MeetTheTeam from './MeetTheTeam.jsx';
import Sempage from './Sempage.jsx';
import Combined from './SubmitPapers/Combined.jsx';
import One from './RequestPapers/One.jsx'
function App() {

  return (
    <>

    <Router>
    <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about-us' element={<MeetTheTeam/>}/>
            <Route path='/Qp/:dept' element={<Sempage/>}/>
            <Route path='/contribute' element={<Combined/>}/>
            <Route path='/submitpapers' element={<One/>}/>
          </Routes>
      <Footer/>
    </Router>
     
    </>
  )
}

export default App
