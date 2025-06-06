import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// bootstrap's css and js is being imported to this file after installing it as a dependency
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
