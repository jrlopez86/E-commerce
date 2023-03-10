import React, { useState } from 'react'
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom'
import { useCartContext } from '../../Context/CartContext';





const ItemDetail = ({ poke }) => {

  const [goToCart, setGoToCart] = useState(false)
  const {addProduct} = useCartContext();
  const onAdd = (quantity) => {
    setGoToCart(true);
    addProduct(poke, quantity)
  }

 return (
   <>
     <div  className='detalle' >
       <img src={poke.img} alt={poke.name} />
       <div className='detalle__text'>
       <h3 className="detalle__titulo">{poke.name}</h3>
       <p className="detalle__parrafo detalle__parrafo-precio" >Precio: <span className="cards__precio">${poke.price}</span></p>
       <hr />
       <p className="detalle__parrafo">Tipo: {poke.type}</p>
       <p className="detalle__parrafo">Hp: <span style={{ color: 'green' }}>{poke.Hp}</span></p>
       <p className="detalle__parrafo">Ataque: <span style={{ color: 'green' }}>{poke.Attack}</span></p>
       <p className="detalle__parrafo">Defensa: <span style={{ color: 'green' }}>{poke.Defense}</span></p>
       <p className="detalle__parrafo">V.ataque: <span style={{ color: 'green' }}>{poke.SpAtk}</span></p>
       <p className="detalle__parrafo">V.defensa: <span style={{ color: 'green' }}>{poke.SpDef}</span></p>
       <p className="detalle__parrafo">Velocidad: <span style={{ color: 'green' }}>{poke.Speed}</span></p>
       { goToCart ? <Link className="btn btn-primary boton__carrito" to='/cart'>Terminar Compra</Link> : <ItemCount stock={poke.stock} initial={0} onAdd={onAdd} /> }
       </div>
     </div>
   </>
 );
};
export default ItemDetail