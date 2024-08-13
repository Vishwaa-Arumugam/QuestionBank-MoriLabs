import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import Sempage from './sempage.jsx'
import './index.css'
import SubjectDetails from './SubmitPapers/Header.jsx'
import App from './App.jsx'

import One from './RequestPapers/One.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App></App>
    {/* <One/> */}
    {/* <SubjectDetails></SubjectDetails> */}
  </StrictMode>,
)
