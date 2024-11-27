import { useEffect, useState, useMemo } from "react";
import { db } from "../Data/db";
const useCart = () => {

    const initialCart = ()=>{
        const localStorageCart = localStorage.getItem('cart');
        return localStorageCart ? JSON.parse(localStorageCart) : []
      }
      const [data] = useState(db)
      const [cart, setCart] = useState(initialCart)
      const max_value = 5;
      const min_value = 1;
  
      useEffect(()=>{
        localStorage.setItem('cart', JSON.stringify(cart))
      }, [cart])
  
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
  
    function cleanCart(){
      setCart([])
    }
    const isEmpty = useMemo( ()=> cart.lengt === 0, [cart]);
    const cartTotal = useMemo( ()=>cart.reduce((total, item)=> total + (item.quantity * item.price),0), [cart])

    return {
        data,
        cart,
        addToCard,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        cleanCart,
        isEmpty,
        cartTotal
    };
}
 
export default useCart;