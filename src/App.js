import './App.css';
import DaysiNavBar from './components/DaysiNavBar';
import FooterDaysi from './components/FooterDaysi';
import AOS from "aos";
import "aos/dist/aos.css";
import TableCarousel from './components/TableCarousel';
import ConoceProductos from './components/ConoceProductos';
import Contador from './components/Contador';
import ItemListContainer from './components/ItemListContainer';
import CardProduct from './components/CardProduct';
import ItemList from './components/ItemList';




function App() {
  AOS.init();
  const myFunction = () => {/*logica*/ }
  return (
    <div className="App text-center">

      {/* Header */}
      <DaysiNavBar />

      {/* Body */}
      <TableCarousel />
      <ConoceProductos />
      <ItemListContainer/>
      {/* Footer */}
      <FooterDaysi />


    </div>
  );
}

export default App;
