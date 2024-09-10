import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import GuessTheNumberGame from './components/GuessTheNumberGame.jsx'

import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GuessTheNumberGame />
  </StrictMode>,
)
