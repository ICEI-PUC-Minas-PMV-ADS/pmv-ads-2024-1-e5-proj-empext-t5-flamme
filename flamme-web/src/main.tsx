import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import CheckoutBudget from './screens/CheckoutBudget/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CheckoutBudget />
  </React.StrictMode>,
)
