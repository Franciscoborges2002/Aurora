import React from 'react'
import ReactDOM from 'react-dom/client'//DOM - Document Object Module
import { BrowserRouter } from 'react-router-dom'
import App from './App'

import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
