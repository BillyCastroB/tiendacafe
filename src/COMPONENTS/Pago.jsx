import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { cliente } from './Axios';
import Swal from 'sweetalert2';
export const Pago = () => {
    const navigate = useNavigate();
    const localStorageCart = localStorage.getItem('cart');
    const lista  = JSON.parse(localStorageCart)
    console.log(lista);

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    
    const datosUsuarioNombre = (e)=>{
        setNombre(e.target.value);
    }
    const datosUsuarioEmail = (e)=>{
        setEmail(e.target.value);
    }
    const validar = (e)=>{
        e.preventDefault();
        console.log('click');
        if(nombre.trim()=== '' || email.trim() === ''){
            alert('Todos los campos son obligatorios')
        }
    }
    const enviarEmail = async()=>{
        console.log('enviando email');
        const result = await cliente.post('http://localhost:4000/email', { "email": email, "nombre": nombre });
        console.log(result);
        Swal.fire({
            title: "¡ Gracias, Verifica tu EMAIL.. !",
            text: "Estamos procesando la verificación de su pago, de no haber realizado no se procedera la entrega",
            imageUrl: "https://i.ibb.co/M2JDmLk/online-shopping-and-e-commerce-concept-e-commerce-online-shopping-and-marketing-icon-mobile-app-shop.jpg",
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "icono-comprar-online"
          });
          localStorage.clear();
          navigate('/')
    }
  return (
    <main className="container-xl mt-5">
        <header>
            Comprando..
        </header>
        <section className='sectionPago'>
            <div>
                <h3>Información de tu compra</h3>
                <div>
                    <h4>Lista de tus Productos</h4>
                    <ul>
                        {lista.map(producto=>(
                            <div className='listaPago'>
                                <li><img className='imagenProductoPago' src={`./img/${producto.image}.webp`} alt="" /></li>
                                <li>{producto.name}</li>
                                <li>{producto.price}</li>
                                <li>{producto.quantity}</li>
                                <li>SubTotal:</li>
                                <li>{producto.price * producto.quantity}</li>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='divPagar'>
                <h3>Metodo de Pago</h3>
                <div>
                    <form onSubmit={validar}>
                        <p>Agregue un email para enviarle un mensaje de confirmación</p>
                        <div>
                            <label htmlFor="">Su Nombre</label>
                            <input 
                                name='nombre'
                                type="text"
                                onChange={datosUsuarioNombre}/>
                        </div>
                        <div>
                            <label htmlFor="">Su email</label>
                            <input 
                                email='email'
                                onChange={datosUsuarioEmail}
                                type="email"/>
                        </div>
                        <input className='ValidarPago' type="submit" onSubmit={validar}  value='Registrar Email'/>
                    </form>
                    <div>
                        <img className='imgYape' src="./img/yape.jpg" alt="" />
                    </div>
                    <button 
                        type='button' 
                        className='pagoEnd'
                        onClick={enviarEmail}
                        >Finalizar Compra</button>
                </div>
            </div>
        </section>
    </main>
  )
}
