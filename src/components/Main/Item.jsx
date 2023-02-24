import React, { useState } from 'react'
import ItemCount from './ItemCount'
import { Element } from 'react-scroll';
import { Link } from 'react-router-dom'

const Item = ({prod}) => {


  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleButtonClick = (event) => {
    event.stopPropagation();
  };




  return (

    <Element name='cartas'  className={` cards card ${isFlipped ? "flipped" : ""}`} onClick={handleClick}  key={prod.id}>
      <div className="front">
        <img src={prod.img} alt={prod.name} />
        <h3  className="cards__titulo">{prod.name}</h3>
        <p>Precio <span className="cards__precio">${prod.price}</span></p>
        <ItemCount stock= {prod.stock} initial= {0} />
        <Link to={`/ItemListContainer/${prod.id}`}   onClick={handleButtonClick} className="cards__detalle btn btn-primary" type="text">Detalle de la carta</Link>
      
      </div>
        <div className="back">
        <img className='back__img' src="../../img/productos/cardback.png" alt={prod.name} />
      </div>
    </Element>

  )
}
export default Item
