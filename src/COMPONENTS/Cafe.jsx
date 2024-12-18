import React, {useState} from 'react'
import Guitar from './Guitar'
import useCart from '../hooks/useCart'
import { db } from "../Data/db";
export const Cafe = ({addToCard}) => {
  const [data] = useState(db)
  return (
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
  )
}
