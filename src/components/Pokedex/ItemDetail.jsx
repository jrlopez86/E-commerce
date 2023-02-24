import React from 'react'
import { useParams } from 'react-router-dom';




const ItemDetail = ({ pokedex }) => {
 const { id } = useParams();
 const producto = pokedex.find(p => p.id === id);

 return (
   <>
     <div key={producto.id} className='detalle' >
       <img src={producto.img} alt={producto.name} />
       <h3 className="detalle__titulo">Nombre: {producto.name}</h3>
       <p className="detalle__parrafo">Tipo: {producto.type}</p>
       <p className="detalle__parrafo">Hp: {producto.Hp}</p>
       <p className="detalle__parrafo">Ataque: {producto.Attack}</p>
       <p className="detalle__parrafo">Defensa: {producto.Defense}</p>
       <p className="detalle__parrafo">V.ataque: {producto.SpAtk}</p>
       <p className="detalle__parrafo">V.defensa: {producto.SpDef}</p>
       <p className="detalle__parrafo">Velocidad: {producto.Speed}</p>
     </div>
   </>
 );
};
export default ItemDetail

