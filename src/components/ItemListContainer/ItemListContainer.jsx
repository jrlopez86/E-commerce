import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getProducts } from '../../data/data';
import ItemList from './ItemList';



const ItemListContainer = () => {
        //Consumir promesa
        const [listaProductos, setListaProductos] = useState([]);
        const {type} = useParams();
        
        useEffect(() => {
          

            if(type){
              getProducts()
              .then(res => setListaProductos(res.filter((item)=> item.type === type)))

            }else{
              getProducts()
              .then((res) => setListaProductos(res))
            }
            
             
          
        }, [type]);


  return (
    <>
      <ItemList listaProductos={listaProductos} />
    </>

  )
}


export default ItemListContainer