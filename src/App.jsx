import React from 'react'
import AppRoutes from './Routes'
import { CartProvider } from './pages/shop/CartContext'

const App = () => {
  return (
    <div>
      <CartProvider>
        <AppRoutes></AppRoutes>
      </CartProvider>

    </div>
  )
}

export default App
