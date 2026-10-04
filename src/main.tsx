import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { LikesProvider } from './context/LikesContext.tsx'
import './style.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* basename = '/iwamad-practice/', the same base as in vite.config.ts */}
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <LikesProvider>
        <App />
      </LikesProvider>
    </BrowserRouter>
  </StrictMode>,
)
