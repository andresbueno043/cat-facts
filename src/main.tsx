import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { FactContextProvider } from './context/FactContext.tsx'
import { GiphyContextProvider } from './context/GiphyContext.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <FactContextProvider>
            <GiphyContextProvider>
                <App />
            </GiphyContextProvider>
        </FactContextProvider>
    </React.StrictMode>
)
