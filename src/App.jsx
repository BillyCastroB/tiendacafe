import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './COMPONENTS/Header'
import './App.css'
import Guitar from './COMPONENTS/Guitar'
import { Cafe } from './COMPONENTS/Cafe'
import useCart from './hooks/useCart'
import { Sal } from './COMPONENTS/Sal'
import { db } from './Data/db'
import { Footer } from './COMPONENTS/Footer'
import { Pago } from './COMPONENTS/Pago'

function App() {
  const {
    data,
    cart,
    addToCard,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    cleanCart,
    isEmpty,
    cartTotal
  } = useCart()

  return (
    <BrowserRouter>
      {/* El Header es permanente */}
      <Header 
        cart={cart}
        removeFromCart={removeFromCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        cleanCart={cleanCart}
        isEmpty={isEmpty}
        cartTotal={cartTotal}
      />
      {/* Rutas dinámicas */}
      <Routes>
        <Route path="/" element={<Cafe addToCard={addToCard} />} />
        <Route path="/sal" element={<Sal addToCard={addToCard} />} />
        <Route path="/pago" element={ <Pago/> } />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
