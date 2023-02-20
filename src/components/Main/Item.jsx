import React from 'react'
import ItemCount from './ItemCount'

const item = ({prod}) => {
  return (

    <div id='cartas' className='cards' key={prod.id}>
    <img src={prod.img} alt={prod.name} />
    <h3  className="cards__titulo">{prod.name}</h3>
    <p>Precio <span className="cards__precio">${prod.price}</span></p>
    <ItemCount stock= {prod.stock} initial= {0} />
    </div>

  )
}

export default item
