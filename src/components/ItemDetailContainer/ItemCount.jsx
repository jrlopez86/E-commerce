import React, { useState } from 'react'
import { useCartContext } from '../../Context/CartContext';



const ItemCount = ({ stock, initial, onAdd }) => {

  // const { addToCart } = useCartContext();
  // addToCart();
    const [count, setCount] = useState(initial)

    const restar = () => {
      if (count > 0) {
        setCount(count - 1);
      }
    };

    const sumar = () => {
      if (count < stock) {
        setCount(count + 1);
      }
    };



  return (
    <>
    <div className=" boton">
      <button  onClick={restar} type="button" className="btn btn-outline-primary">-</button>
      <span className='boton__count'>{count}</span>
      <button  onClick={sumar} type="button" className="btn btn-outline-primary">+</button>
      <button onClick={() => { onAdd(count) }} type="button" className="btn btn-outline-primary boton__carrito">  Agregar al carrito</button>
  </div>
    </>


  )
}




export default ItemCount
