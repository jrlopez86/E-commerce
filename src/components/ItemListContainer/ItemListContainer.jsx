import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import ItemList from './ItemList';
import Loader from './Loader';


const ItemListContainer = React.memo(() => {
  const [listaProductos, setListaProductos] = useState([]);
  const [loading, setLoading] = useState(false);
  const { type } = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, 'items');
    setLoading(true);
    if (type) {
      const queryFilter = query(queryCollection, where('type', '==', type));
      getDocs(queryFilter)
        .then(res => {
            setListaProductos(res.docs.map(product => ({id: product.id, ...product.data() })));
        })
        .catch(error => console.log(error))
        .finally(() => setLoading(false));
    } else {
      getDocs(queryCollection)
        .then(res => {
            setListaProductos(res.docs.map(product => ({id: product.id, ...product.data() })));
        })
        .catch(error => console.log(error))
        .finally(() => setLoading(false));
    }
  }, [type]);

  return (
    <>
      {loading ? <Loader /> : <ItemList listaProductos={listaProductos} /> }

    </>
  );
});

export default ItemListContainer;





