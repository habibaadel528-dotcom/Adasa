import { createRoot } from 'react-dom/client'
import { HashRouter } from "react-router-dom"
import "./style.css"
import App from './App.jsx'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import "../node_modules/@fortawesome/fontawesome-free/css/all.css"

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <App />
  </HashRouter>
)
