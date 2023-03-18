import React, { useState, useEffect } from 'react'
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom'
import { useCartContext } from '../../Context/CartContext';
import Loader from '../ItemListContainer/Loader'

const ItemDetail = ({ poke }) => {

  const [goToCart, setGoToCart] = useState(false);
  const { addProduct } = useCartContext();
  const [loading, setLoading] = useState(false);
  const onAdd = (quantity) => {
    setGoToCart(true);
    addProduct(poke, quantity);
  }

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className='detalle'>
          <img src={poke.img} alt={poke.name} />
          <div className='detalle__text'>
            <h3 className="detalle__titulo">{poke.name}</h3>
            <p className="detalle__parrafo detalle__parrafo-precio" >Precio: <b><span className="cards__precio">${poke.price}</span></b></p>
            <hr />
            <p className="detalle__parrafo">Tipo: {poke.type}</p>
            <p className="detalle__parrafo">Hp: <span style={{ color: 'green' }}>{poke.hp}</span></p>
            <p className="detalle__parrafo">Ataque: <span style={{ color: 'green' }}>{poke.attack}</span></p>
            <p className="detalle__parrafo">Defensa: <span style={{ color: 'green' }}>{poke.defense}</span></p>
            <p className="detalle__parrafo">V.ataque: <span style={{ color: 'green' }}>{poke.spAtk}</span></p>
            <p className="detalle__parrafo">V.defensa: <span style={{ color: 'green' }}>{poke.spDef}</span></p>
            <p className="detalle__parrafo">Velocidad: <span style={{ color: 'green' }}>{poke.speed}</span></p>
            { goToCart ? (
              <div className="d-flex flex-row mb-3">
                <Link className="btn btn-primary boton__carrito" to='/cart'>Terminar Compra</Link>
                <Link className="btn btn-info boton__carrito" to='/'>¡Ver más cartas!</Link>
              </div>
            ) : (
              <ItemCount stock={poke.stock} initial={0} onAdd={onAdd} />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ItemDetail;
