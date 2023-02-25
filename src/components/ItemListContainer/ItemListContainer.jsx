import React, { useEffect, useState } from 'react'
import { getProducts } from '../../data/data';
import ItemList from './ItemList';



const ItemListContainer = () => {
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