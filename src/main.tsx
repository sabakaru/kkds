import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { WebAppProvider } from '@vkruglikov/react-telegram-web-app'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <WebAppProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </WebAppProvider>,
)
