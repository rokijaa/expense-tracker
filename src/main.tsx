import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Navbar } from './Navbar.jsx'
import { Content } from './Content.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="webwrap">
      <Navbar />
      <Content />
    </div>
  </StrictMode>,
)
