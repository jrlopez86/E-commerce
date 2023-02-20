 import React from 'react'





 const ItemDetail = ({pokedex}) => {
   return (

    {pokedex.map((poke) => (
       <>
        <div id='cartas' className='cards' key={poke.id}>
        <h3  className="cards__titulo">{poke.name}</h3>
        </div>
       </>




      ))}

   )

 }

 export default ItemDetail
