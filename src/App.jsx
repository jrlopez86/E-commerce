import NavBar from './components/Navbar/NavBar';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetail from './components/Pokedex/ItemDetail';


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route exact path='/' element={<Main />} />
          <Route exact path="/ItemList/:prod.id" element={<ItemDetail />} />

        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );



}

export default App;
