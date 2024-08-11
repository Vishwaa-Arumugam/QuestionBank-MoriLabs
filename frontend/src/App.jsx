import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Home from './Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  

import Footer from './Footer.jsx'
import MeetTheTeam from './MeetTheTeam.jsx';
import Sempage from './Sempage.jsx';
import Heading from './SubmitPapers/Header.jsx';
import SubjectDetails from './SubmitPapers/SubjectDetails.jsx';
import MoreDetails from './SubmitPapers/MoreDetails.jsx';
import FileUpload from './SubmitPapers/Upload.jsx';
import AcknowledgementCheckbox from './SubmitPapers/AcknowledgementCheckBox.jsx';
import Alias from './SubmitPapers/Alias.jsx';
import Head from './SubmitPapers/Head.jsx';
function App() {

  return (
    <>
    <Router>
    <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about-us' element={<MeetTheTeam/>}/>
            <Route path='/Qp/:dept' element={<Sempage/>}/>
          </Routes>
      <Footer/>
    </Router>
     
    </>
  )
}

export default App
