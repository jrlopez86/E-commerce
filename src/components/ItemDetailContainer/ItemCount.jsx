import React, { useState } from 'react'



const ItemCount = ({ stock, initial, handleClick , restClick }) => {
  
    const [count, setCount] = useState(initial)

   restClick = (event) => {
    event.stopPropagation();
    count > 0 ? setCount(count - 1) : setCount(count)
   }


   handleClick = (event) => {
    event.stopPropagation();
    count < stock ? setCount(count +1) : setCount(count)

  }

  const handleButtonClick = (event) => {
    event.stopPropagation();
  };


  return (
    <>
    <div className=" boton">
      <button  onClick={restClick} type="button" className="btn btn-outline-primary">-</button>
      <span className='boton__count'>{count}</span>
      <button  onClick={handleClick} type="button" className="btn btn-outline-primary">+</button>
      <button onClick={handleButtonClick} type="button" className="btn btn-outline-primary boton__carrito">Agregar al carrito</button>
    </div>
    </>

   
  )
}

  


export default ItemCount
