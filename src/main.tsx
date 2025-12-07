import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import Home from "./pages/home.tsx";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
        <Home></Home>
  </StrictMode>,
)
