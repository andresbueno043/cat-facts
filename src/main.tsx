import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { FactContextProvider } from './context/FactContext.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <FactContextProvider>
            <App />
        </FactContextProvider>
    </React.StrictMode>
)
