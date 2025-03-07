import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthProvider } from './components/Auth/AuthContext.jsx'


createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <AuthProvider>
    <App />
    </AuthProvider> 
  // </StrictMode>,
)
