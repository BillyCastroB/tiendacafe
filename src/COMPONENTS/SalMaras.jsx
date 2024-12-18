import React from 'react'
export const SalMaras = ({sal, addToCard}) => {

  const {name, price, description, image, cantidad} = sal

  return (
    <div className="col-md-6 col-lg-4 my-4 row align-items-center">
      <div className="col-4">
        <img className="img-fluid" src={`/img/${image}.webp`} alt="imagen guitarra" />
      </div>
      <div className="col-8">
        <h3 className="text-black fs-4 fw-bold text-uppercase"> {name} </h3>
        <p>{description}</p>
        <p className="cantidad">peso: {cantidad}</p>
        <p className="fw-black text-primary fs-3">S/.{price}.00</p>
        <button
         type="button"
         className="btn btn-dark w-100"
         onClick={()=>addToCard(sal)}
        >Agregar al Carrito</button>
      </div>
    </div>
  )
}
