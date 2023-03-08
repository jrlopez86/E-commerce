import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getProducts } from '../../data/data';
import ItemList from './ItemList';
import Loader from './Loader';



const ItemListContainer = () => {
        //Consumir promesa
        const [listaProductos, setListaProductos] = useState([]);
        const [loading, setLoading] = useState(false)
        const {type} = useParams();
        
        useEffect(() => {
          setLoading(true)
            if(type){
              getProducts()
              .then(res => setListaProductos(res.filter((item)=> item.type === type)))
              .finally(() => setLoading(false))
            }else{
              getProducts()
              .then((res) => setListaProductos(res))
              .catch((err) => console.log(err))
              .finally(() => setLoading(false))
        
            }

        }, [type]);


  return (
    <>
    {loading ? <Loader /> : <ItemList listaProductos={listaProductos} /> }
    </>

  )
}


export default ItemListContainer


