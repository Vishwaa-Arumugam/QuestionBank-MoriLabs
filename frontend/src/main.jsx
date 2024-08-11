import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import Sempage from './sempage.jsx'
import './index.css'
import SubjectDetails from './SubmitPapers/Header.jsx'
import App from './App.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App></App>
    {/* <SubjectDetails></SubjectDetails> */}
  </StrictMode>,
)
