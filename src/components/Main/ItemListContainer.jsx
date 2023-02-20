import React, { useEffect, useState } from 'react'
import ItemList from './ItemList';



const ItemListContainer = () => {

      //Array de objetos
      const products = [
        {id:0, name:"Bulbasaur", type: "planta", price: 80, img:"../../img/productos/bulbasaur.png", stock: 8},
        {id:1, name:"Ivysaur", type: "planta", price: 60, img:"../../img/productos/ivysaur.png", stock: 2},
        {id:2, name:"Venusaur", type: "planta", price: 20, img:"../../img/productos/venusaur.png", stock: 5},
        {id:3, name:"Charmander", type: "fuego", price: 100, img:"../../img/productos/charmander.png", stock: 1},
        {id:4, name:"Charmeleon", type: "fuego", price: 30, img:"../../img/productos/charmeleon.png", stock: 6},
        {id:5, name:"Charizard", type: "fuego", price: 220, img:"../../img/productos/charizard.png", stock: 3},
        {id:6, name:"Squirtle", type: "agua", price: 15, img:"../../img/productos/squirtle.png", stock: 1},
        {id:7, name:"Wartortle", type: "agua", price: 32, img:"../../img/productos/wartortle.png", stock: 6},
        {id:8, name:"Blastoise", type: "agua", price: 175, img:"../../img/productos/blastoise.png", stock: 3}
     ]

     
      //Promesa a resolver 
      const getProducts = () => { 
        return new Promise((resolve, reject) => {
        setTimeout(() => {

        products.length ? resolve(products) : reject("NO hay productos")

        }, 2000);
        });
        };

     

        //Consumir promesa
        const [listaProductos, setListaProductos] = useState([]);
        
        useEffect(() => {
          getProducts()
            .then((res) => setListaProductos(res))
            .catch((error) => alert(error))
            
        }, []);


  return (
    <>
      <ItemList listaProductos={listaProductos} />
    </>

  )
}


export default ItemListContainer
