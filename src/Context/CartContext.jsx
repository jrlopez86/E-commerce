import React, { useContext, useState } from 'react'
const CartContext = React.createContext([]);
export const useCartContext = () => useContext(CartContext)






const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  // 1) Vaciar carrito.
  const clearCart = () => {
    setCart([]);
  }

  // 2) Verificar si un producto ya está en el carrito.
  const isInCart = (id) => {
    return cart.find((product) => product.id === id) ? true : false;
  }

  // 3) Eliminar un producto del carrito.
  const removeProduct = (id) => {
    const newCartItems = cart.filter((cart) => cart.id !== id)
    setCart(newCartItems);
  }


   // 4) Agregar un producto al carrito.
   const addProduct = (item, quantity) => {
    if (isInCart(item.id)) {
      setCart(cart.map((product) =>  product.id === item.id ?  { ...product, quantity: product.quantity + quantity } : product
      ));
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  }

  console.log('carrito', cart);

  return (
    <CartContext.Provider value={{ clearCart, isInCart, removeProduct, addProduct }}>
     {children}
    </CartContext.Provider>
  )
}

export default CartProvider