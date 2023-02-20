import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'



const ItemDetailContainer = () => {


const [pokedex, setPokedex] = useState([])

useEffect(() => {
  fetch('https://pokeapi.co/api/v2/pokemon?limit=9')
  .then(response => response.json())
  .then(dataJson => setPokedex(dataJson.results))
}, [])



  return (
      <>
      <ItemDetail pokedex={pokedex} />
      </>
  )
}

export default ItemDetailContainer
