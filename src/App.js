import './App.css';
import DaysiNavBar from './components/DaysiNavBar';
import FooterDaysi from './components/FooterDaysi';
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/paginas/Home';
import Productos from './components/paginas/Productos';
import ItemListUnico from './components/itemList/ItemListUnico';
import Carrito from './components/paginas/Carrito';
import Promociones from './components/paginas/Promociones';
import MarcasContainer from './components/MarcasContainer';
import CartContextProvider, { CartProvider } from './components/context/CartContext';

function App() {
  AOS.init();
  return (
    <CartProvider>
      <div className="App text-center">
        <BrowserRouter>
          {/* Header */}
          <DaysiNavBar />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/productos' element={<Productos />}></Route>
            <Route path='/productos/:productoId' element={<ItemListUnico />} />
            <Route path='/carrito' element={<Carrito />} />
            <Route path='/promociones' element={<Promociones />}></Route>
            <Route path='/marcas/:marcaId' element={<MarcasContainer />}></Route>
          </Routes>
          <FooterDaysi />
        </BrowserRouter>
      </div>
    </CartProvider>
  );
}

export default App;
