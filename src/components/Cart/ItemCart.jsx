import React from 'react'
import { useCartContext } from '../../Context/CartContext'


const ItemCart = ({ product }) => {

    const { removeProduct } = useCartContext();


  return (
    
    <div className='itemCart detalle'>
        <img src={product.img} alt={product.title} />
        <div>
            <p className="detalle__parrafo" >Titulo: {product.name}</p>
            <p className="detalle__parrafo" >Cantidad: {product.quantity}</p>
            <p className="detalle__parrafo" >Precio: {product.price}</p>
            <p className="detalle__parrafo" >Subtotal: ${product.quantity * product.price}</p>
            <button className='btn btn-danger btn-sm' onClick={() => removeProduct(product.id)}>Eliminar</button>
        </div>
    </div>
  )
}

export default ItemCart