import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Home from './Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  

import Footer from './Footer.jsx'
import MeetTheTeam from './MeetTheTeam.jsx';
import Sempage from './Sempage.jsx';
<<<<<<< HEAD
import ResultPage from './ResultPage.jsx';
=======
import Combined from './SubmitPapers/Combined.jsx';
>>>>>>> 3b3c3b99161c107ebcac8d79f857e52126b8df39
function App() {

  return (
    <>

    <Router>
    <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about-us' element={<MeetTheTeam/>}/>
            <Route path='/Qp/:dept' element={<Sempage/>}/>
<<<<<<< HEAD
            <Route path='/result/:deptName/:selectedSem/:selectedSub/:paperName' element={<ResultPage/>}/>
=======
            <Route path='/contribute' element={<Combined/>}/>
>>>>>>> 3b3c3b99161c107ebcac8d79f857e52126b8df39
          </Routes>
      <Footer/>
    </Router>
     
    </>
  )
}

export default App
