import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'




const getItem = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      fetch(process.env.PUBLIC_URL + "/data.json")
        .then(response => response.json())
        .then(data => {  resolve(data); }
        );
    }, 2000);
  });
};

fetch(process.env.PUBLIC_URL + "/data.json")
  .then(response => response.json())
  .then(data => {
    const productosCategoria = data.filter(producto => producto.id === id);
    console.log(productosCategoria);
  })
  .catch(error => console.error(error));



const ItemDetailContainer = () => {

const [pokedex, setPokedex] = useState([])

useEffect(() => {
  getItem().then((result) => {
    setPokedex(result);
  });
}, []);



  return (
      <>
     <ItemDetail pokedex={pokedex} /> 
      </>
      
  )
}

export default ItemDetailContainer


