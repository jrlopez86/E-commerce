import NavBar from './components/Navbar/NavBar';
import Main from './components/ItemListContainer/Main';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';



function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route exact  path='/' element={<Main />} />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
          <Route exact path="/categorias/:type" element={<Main />}/>
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );



}

export default App;