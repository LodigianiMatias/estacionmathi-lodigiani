import './App.css';
import DaysiNavBar from './components/DaysiNavBar';
import FooterDaysi from './components/FooterDaysi';
import AOS from "aos";
import "aos/dist/aos.css";
import TableCarousel from './components/TableCarousel';
import ConoceProductos from './components/ConoceProductos';
import Contador from './components/Contador';
import ItemListContainer from './components/ItemListContainer';
import CountriesContainer from './components/CountriesContainer';



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
      <ItemListContainer producto="Producto" precio="$Precio" />
      <Contador />
      <CountriesContainer />


      {/* Footer */}
      <FooterDaysi />


    </div>
  );
}

export default App;
