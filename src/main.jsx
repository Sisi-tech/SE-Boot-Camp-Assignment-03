import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Navbar from './components/Navbar.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='flex flex-col gap-2'>
      <Header />
      <Navbar />
      <App />
      <Footer />
    </div>
  </StrictMode>,
)
