import React, { useState } from 'react';
import { useCartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import ItemCart from './ItemCart';
import { addDoc, collection, getFirestore } from  'firebase/firestore'
import Swal from 'sweetalert2'




const mostrarAlerta = () => {
    Swal.fire(
    'Gracias por tu compra',
    'Se enviara a tu email los detalles',
    'success'
  )
}

const Cart = () => {
  const { cart, totalPrice, clearCart } = useCartContext();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const order = {
      buyer: {
        name: name,
        email: email,
        phone: phone
      },
      items: cart.map(product => ({id: product.id, name: product.name, price: product.price, quantity: product.quantity})),
      total: totalPrice()
    };
    const db = getFirestore();
    const ordersCollection = collection(db, 'orders');
    addDoc(ordersCollection, order)
    .then(() => {
    })
    .catch((error) => {
    console.error("Error al agregar el documento: ", error);
    });
  
    // Limpiar los campos del formulario después de enviar la orden
    setName('');
    setEmail('');
    setPhone('');
    clearCart();
    mostrarAlerta();
  }
  
  
  
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
<div style={{ display: 'flex', justifyContent: 'center', gap: '50px', marginBottom: '50px', position: 'relative', bottom: '50px' }}>
        <div>
          {cart.map(product => <ItemCart key={product.id} product={product} />)}
          <button onClick={() => {clearCart()}} type="button" className="btn btn-secondary" style={{ display: 'block', margin: '0 auto', marginTop: '15px' }}>Borrar todo</button>

        </div>
        <div style={{ marginLeft: '20px' }}>
          <form className="formCards" style={{ maxWidth: 800 }}  onSubmit={handleSubmit}>
            <p className="detalle__parrafo" style={{ textAlign: 'center' }}>Ingrese los datos para terminar la compra</p>
            <div className="mb-3">
              <label  htmlFor="name" className="form-label detalle__parrafo">Nombre</label>
              <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label detalle__parrafo">Email</label>
              <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label detalle__parrafo">Teléfono</label>
              <input type="text" className="form-control" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
            </div>
            <button  type="submit" className="btn btn-success">Finalizar compra</button>
          </form>
          <p className="detalle__precioTotal">TOTAL: <b style={{ marginLeft: '10px' }}>${totalPrice()}</b></p>

        </div>
      </div>
    </>
  );
  
};

export default Cart;
