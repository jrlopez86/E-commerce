import React from 'react'
import carrito from '../../img/carrito.png'
import { Link } from 'react-router-dom'




const CartWidget = () => {


  return (
    <div>
    <Link  to='/cart'><img className='navBarMod__carrito' src={carrito} alt="carrito de compras"/></Link>
      <span className='navBarMod__contador'>3</span>
    </div>
    
  )
}

export default CartWidget
