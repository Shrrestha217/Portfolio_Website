import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { LayoutProvider } from './pages/context/LayoutContext.jsx'
import { SectionRefsProvider } from './pages/context/SectionRefsContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LayoutProvider>
      <SectionRefsProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SectionRefsProvider>
    </LayoutProvider>
  </StrictMode>,
)
