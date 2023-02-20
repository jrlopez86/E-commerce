import React, { useState } from 'react'
import CartWidget from '../Navbar/CartWidget'



const ItemCount = ({ stock, initial,  handleClick, restClick }) => {
  
    const [count, setCount] = useState(initial)

   restClick = () => {
    count > 0 ? setCount(count - 1) : setCount(count)
   }


  handleClick = () => {
    count < stock ? setCount(count +1) : setCount(count)

  }


  return (
    <>
    <div className=" boton">
      <button  onClick={restClick} type="button" className="btn btn-outline-primary">-</button>
      <span className='boton__count'>{count}</span>
      <button  onClick={handleClick} type="button" className="btn btn-outline-primary">+</button>
      <button type="button" className="btn btn-outline-primary boton__carrito">Agregar al carrito</button>
    </div>
    </>

   
  )
}

  


export default ItemCount
