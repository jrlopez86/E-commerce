import React, { useContext, useState } from 'react'
const CartContext = React.createContext([]);
export const useCartContext = () => useContext(CartContext)






const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  // Nos dice el precio total
  const totalPrice = () => {
    return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
  }

  //Cuantos productos tengo en total
  const totalProducts = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0);

  // 1) Vaciar carrito.
  const clearCart = () => {
    setCart([]);
  }

  // 2) Verificar si un producto ya está en el carrito.
  const isInCart = (id) => {
    return cart.find((product) => product.id === id) ? true : false;
  }

  // 3) Eliminar un producto del carrito.
  const removeProduct = (id) => setCart(cart.filter(product => product.id !== id))

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
    <CartContext.Provider
      value={{
        clearCart,
        isInCart,
        removeProduct,
        addProduct,
        totalPrice,
        totalProducts,
        cart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider