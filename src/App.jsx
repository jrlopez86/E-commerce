import React from 'react';
import NavBar from './components/Navbar/NavBar';
import Main from './components/ItemListContainer/Main';
import Footer from './components/Footer/Footer';
import Cart from '../src/components/Cart/Cart';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import CartProvider from './Context/CartContext';
// import OrderForm from './components/Firebase/OrderForm';



function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Main />} />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
          <Route exact path="/categorias/:type" element={<Main />}/>
          <Route exact path='/cart' element={<Cart />}/>
        </Routes>
        </CartProvider>
        <Footer />
      </BrowserRouter>
    </>
  );



}

export default App;