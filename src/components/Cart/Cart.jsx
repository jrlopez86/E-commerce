import React from 'react';
import { useCartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import ItemCart from './ItemCart';



const Cart = () => {
  const { cart, totalPrice } = useCartContext();



  if (cart.length === 0) {
    return (
      <>
        <div className='detalle d-flex flex-column mb-3' style={{ alignItems: 'center', justifyContent: 'center' }} >
          <p className="detalle__parrafo" >¡No hay elementos en el carrito!</p>
          <Link className='btn btn-primary' to='/'>Comprar Cartas!!</Link>
        </div>
      </>
    );
  }

  return (
     <>
     {
      cart.map(product => <ItemCart key={product.id} product={product} />)
     }
     <p className="btn btn-success" style={{ pointerEvents: 'none', position: 'relative', left: '525px' }} >
      TOTAL: {totalPrice()}
     </p>
     {/* <button type="button" class="btn btn-secondary">Vaciar Carrito</button> */}

     </>
  );
};

export default Cart;