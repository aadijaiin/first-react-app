import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App name="Aadi jain" intro="Hello React world!, I am Aadi jain , new here." />
  </StrictMode>,
)
