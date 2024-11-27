
import Header from './COMPONENTS/Header'
import './App.css'
import Guitar from './COMPONENTS/Guitar'
import useCart from './hooks/useCart'
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
    <>
    <Header 
      cart={cart}
      removeFromCart = {removeFromCart}
      increaseQuantity= {increaseQuantity}
      decreaseQuantity= {decreaseQuantity}
      cleanCart= {cleanCart}
      isEmpty={isEmpty}
      cartTotal={cartTotal}
    />
    <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Variedad</h2>

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
            <p className="text-white text-center fs-4 mt-4 m-md-0">Café San Antonio - Todos los derechos Reservados</p>
        </div>
    </footer>
    </>
  )
}

export default App
