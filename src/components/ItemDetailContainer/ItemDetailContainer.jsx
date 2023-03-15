import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { getProducts } from '../../data/data'
import { getFirestore, doc, getDoc } from 'firebase/firestore';





const ItemDetailContainer = () => {

const [poke, setPoke] = useState({})
const {id}= useParams()

useEffect(() => {
  const querydb = getFirestore();
  const queryDoc = doc(querydb, 'items', id );
  getDoc(queryDoc)
  .then(res => setPoke({id: res.id, ...res.data()}))

}, [id]);



  return (
      <>
     <ItemDetail poke={poke} /> 
    
     
      </>
      
  )
}

export default ItemDetailContainer
