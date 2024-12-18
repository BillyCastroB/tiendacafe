import React, {useState} from 'react'
import { SalMaras } from './SalMaras'
import { dbSal } from '../Data/db'
export const Sal = ({addToCard}) => {
  const [data] = useState(dbSal)
  return (
    <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Variedad</h2>

        <div className="row mt-5"> 
        {data.map(sal =>(
            <SalMaras
            key = {sal.id}
            sal = {sal}
            addToCard = {addToCard}/>
        ))}
        </div>
    </main>
  )
}
