import React from 'react'
import carrito from '../../img/carrito.png'

const CartWidget = () => {
  return (
    <div>
      <a href="#"><img className='navBarMod__carrito' src={carrito} alt="carrito de compras"/></a>
      <span className='navBarMod__contador'>3</span>
    </div>
  )
}

export default CartWidget
