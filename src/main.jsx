import { StrictMode } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { createRoot } from 'react-dom/client'
import './style/style.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import Header from './components/Header.jsx'
import Packages from './components/Packages.jsx'
import Destinations from './components/Destinations.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar>
      <Header />
      <Packages />
      <Destinations />
    </Navbar>
  </StrictMode>,
)
