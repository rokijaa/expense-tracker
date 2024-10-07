import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Navbar } from './Navbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Content />
  </StrictMode>,
)
