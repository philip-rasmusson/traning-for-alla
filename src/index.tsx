import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {App} from './App'
import reportWebVitals from './reportWebVitals'
import { Footer } from './components/footer/Footer'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
)


reportWebVitals()
