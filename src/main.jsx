import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { ResultContext } from './context/ResultContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <ResultContext>
        <App />
      </ResultContext>
    </BrowserRouter>
)
