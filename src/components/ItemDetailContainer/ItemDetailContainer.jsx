import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { getProducts } from '../../data/data'
import { getFirestore, doc, getDoc } from 'firebase/firestore';





const ItemDetailContainer = () => {

const [poke, setPoke] = useState({})
const {id}= useParams()

useEffect(() => {
  getProducts()
  .then(res => setPoke(res.find((item)=> item.id === parseInt(id))))
}, [id]);



  return (
      <>
     <ItemDetail poke={poke} /> 
    
     
      </>
      
  )
}

export default ItemDetailContainer
