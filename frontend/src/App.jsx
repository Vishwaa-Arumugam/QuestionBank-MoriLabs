import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Home from './Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import Footer from './Footer.jsx'
import MeetTheTeam from './MeetTheTeam.jsx';
import Sempage from './Sempage.jsx';
import ResultPage from './ResultPage.jsx';
import Combined from './SubmitPapers/Combined.jsx';
import One from './RequestPapers/One.jsx'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about-us' element={<MeetTheTeam />} />
            <Route path='/Qp/:dept' element={<Sempage />} />
            <Route path='/result/:deptName/:selectedSem/:selectedSub/:paperName' element={<ResultPage />} />
            <Route path='/contribute' element={<Combined />} />
            <Route path='/requestpapers' element={<One />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  )
}

export default App
