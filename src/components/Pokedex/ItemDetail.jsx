 import React from 'react'




 const ItemDetail = React.memo(({ pokedex }) => {
  return (
     <>
     
       {pokedex.map((poke) => (
         <div key={poke.id} className='detalle' >
           <img src={poke.img} alt={poke.name} />
           <h3 className="detalle__titulo">Nombre: {poke.name}</h3>
           <p className="detalle__parrafo">Tipo: {poke.type}</p>
           <p className="detalle__parrafo">Hp: {poke.Hp}</p>
           <p className="detalle__parrafo">Ataque: {poke.Attack}</p>
           <p className="detalle__parrafo">Defensa: {poke.Defense}</p>
           <p className="detalle__parrafo">V.ataque: {poke.SpAtk}</p>
           <p className="detalle__parrafo">V.defensa: {poke.SpDef}</p>
           <p className="detalle__parrafo">Velocidad: {poke.Speed}</p>
         </div>
       ))}
     </>
  );
});

 export default ItemDetail
