import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Catalog from './screens/catalog/index.tsx'
import AddProduct from './screens/addProduct/index.tsx'
import Cart from './screens/cart/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AddProduct />
  </React.StrictMode>,
)
