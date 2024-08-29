import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Navigation } from './Navigation.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navigation />
  </StrictMode>,
)
