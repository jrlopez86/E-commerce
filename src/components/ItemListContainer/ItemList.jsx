import React from 'react'
import Item from './Item';








const ItemList = ({listaProductos}) => {
  return (
    <>
      {listaProductos.map((prod) => (
        <Item key={prod.id} prod={prod} />
      ))}
    </>
  );
}

export default ItemList

