import React from 'react'
import carrito from '../../img/carrito.png'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../Context/CartContext'


const CartWidget = () => {
  const { totalProducts } = useCartContext();

  return (
    <div>
      <Link to="/cart">
        <img className="navBarMod__carrito" src={carrito} alt="carrito de compras" />
      </Link>
      {totalProducts() > 0 ? (
        <span className="navBarMod__contador">{totalProducts()}</span>
      ) : null}
    </div>
  );
};

export default CartWidget;
