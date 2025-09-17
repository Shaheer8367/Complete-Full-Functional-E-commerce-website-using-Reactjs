import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainLayout from './MainLayout/MainLayout.jsx'
import Home from './Pages/Home/Home.jsx'
import Login from './Pages/Auth/Login/Login.jsx'
import Register from './Pages/Register/Register.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <MainLayout />
    
  </StrictMode>,
)
