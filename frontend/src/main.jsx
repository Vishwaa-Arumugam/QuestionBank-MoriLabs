import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Sempage from './sempage.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Sempage />
  </StrictMode>,
)
