import './App.css';
import DaysiNavBar from './components/DaysiNavBar';
import FooterDaysi from './components/FooterDaysi';
import AOS from "aos";
import "aos/dist/aos.css";
import Saludo from './components/Saludo';
import TableCarousel from './components/TableCarousel';
import Card from './components/Card';
import ConoceProductos from './components/ConoceProductos';



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
