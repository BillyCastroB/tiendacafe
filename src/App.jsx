import { useState } from 'react'
import Header from './COMPONENTS/Header'
import './App.css'
import Guitar from './COMPONENTS/Guitar'
import { db } from './Data/db'
  function App() {
    const [data, setData] = useState(db)
    const [cart, setCart] = useState([])
    const max_value = 5;
    const min_value = 1;
  function addToCard(item){
    const itemExist = cart.findIndex(guitar => guitar.id === item.id)
    if(itemExist >=0){
      if(cart[itemExist].quantity >= max_value) return
      const updateCart = [...cart];
      updateCart[itemExist].quantity++;
      setCart(updateCart);
    }else{
      item.quantity = 1;
      setCart([...cart, item])
    }
  }

  function removeFromCart(id){
    setCart(prevCart=> prevCart.filter(guitar=> guitar.id !== id))
  }

  function increaseQuantity(id){
    const updateCard = cart.map( guitar => {
      if(guitar.id == id && guitar.quantity < max_value){
        return{
          ...guitar,
          quantity: guitar.quantity + 1
        }
      }
      return guitar;
    })
    setCart(updateCard)
  }

  function decreaseQuantity(id){
    const updateCard = cart.map( guitar => {
      if(guitar.id == id && guitar.quantity > min_value){
        return{
          ...guitar,
          quantity: guitar.quantity - 1
        }
      }
      return guitar;
    })
    setCart(updateCard)
  }

  return (
    <>
    <Header 
      cart={cart}
      removeFromCart = {removeFromCart}
      increaseQuantity= {increaseQuantity}
      decreaseQuantity= {decreaseQuantity}
    />
    <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map(guitar =>(
            <Guitar
            key = {guitar.id}
            guitar = {guitar}
            addToCard = {addToCard}/>
          ))}
        </div>
    </main>


    <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
            <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
    </footer>
    </>
  )
}

export default App
