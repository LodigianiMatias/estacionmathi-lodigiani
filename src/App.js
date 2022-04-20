import './App.css';
import DaysiNavBar from './components/DaysiNavBar';
import FooterDaysi from './components/FooterDaysi';
import AOS from "aos";
import "aos/dist/aos.css";
import TableCarousel from './components/TableCarousel';
import ConoceProductos from './components/ConoceProductos';
import Contador from './components/Contador';
import ItemListContainer from './components/ItemListContainer';



function App() {
  AOS.init();
  const myFunction = () => {/*logica*/}
  return (
    <div className="App text-center">
      <header>
        <DaysiNavBar />
      </header>
      <body>
        <TableCarousel/>
        <ConoceProductos/>
        <ItemListContainer producto="Producto" precio="$Precio"/>
        <Contador/>
        {/*<Saludo name='Matias' edad='21' funcionalidad={myFunction}/>
        <Saludo name='Ana' edad='24'/>

        <Card>
        <Saludo name='Jennifer' edad='32'/>
         </Card> */}
      </body>
      <footer>
        <FooterDaysi />
      </footer>
      
    </div>
  );
}

export default App;
