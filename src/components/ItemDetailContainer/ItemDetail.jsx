import React from 'react'
import ItemCount from './ItemCount';



const ItemDetail = ({ poke }) => {


 return (
   <>
     <div  className='detalle' >
       <img src={poke.img} alt={poke.name} />
       <h3 className="detalle__titulo">Nombre: {poke.name}</h3>
       <p>Precio <span className="cards__precio">${poke.price}</span></p>
       <p className="detalle__parrafo">Tipo: {poke.type}</p>
       <p className="detalle__parrafo">Hp: <span style={{ color: 'green' }}>{poke.Hp}</span></p>
       <p className="detalle__parrafo">Ataque: <span style={{ color: 'green' }}>{poke.Attack}</span></p>
       <p className="detalle__parrafo">Defensa: <span style={{ color: 'green' }}>{poke.Defense}</span></p>
       <p className="detalle__parrafo">V.ataque: <span style={{ color: 'green' }}>{poke.SpAtk}</span></p>
       <p className="detalle__parrafo">V.defensa: <span style={{ color: 'green' }}>{poke.SpDef}</span></p>
       <p className="detalle__parrafo">Velocidad: <span style={{ color: 'green' }}>{poke.Speed}</span></p>
       <ItemCount stock= {poke.stock} initial= {0} />
     </div>
   </>
 );
};
export default ItemDetail