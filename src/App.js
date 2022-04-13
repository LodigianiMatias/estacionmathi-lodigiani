import './App.css';
import DaysiNavBar from './components/DaysiNavBar';
import FooterDaysi from './components/FooterDaysi';
import AOS from "aos";
import "aos/dist/aos.css";


function App() {
  AOS.init();
  return (
    <div className="App">
      <header>
        <DaysiNavBar />
      </header>
      <body>
        <div id='tabla-principal'>
          <table id='renglon-tabla'>
            <tr >
              <td>
                <div data-aos="fade-right">
                  <h2>Estacion Natural MaThi es un almacen natural ubicado en el barrio de Flores donde podrás encontrar todo tipo de productos, entre ellos apto diabéticos, celíacos, hipertensos. Tambien hay frutos secos, semillas, especias, legumbres, cereales, etc. Te invitamos a conocer nuestro local en Avenida Directorio 2565. </h2>
                </div>
              </td>
              <td id='celda-carousel'>
                <div class="carousel w-full">
                  <div id="item1" class="carousel-item w-full">
                    <img src="https://i.ibb.co/MScrFvJ/Estacion1.jpg" alt="Estacion1" border="0" class="w-full" />
                  </div>
                  <div id="item2" class="carousel-item w-full">
                    <img src="https://i.ibb.co/XJNdnSn/Estacion3.jpg" alt="Estacion3" border="0" class="w-full" />
                  </div>
                  <div id="item3" class="carousel-item w-full">
                    <img src="https://i.ibb.co/8BHcPpZ/Estacion2.jpg" alt="Estacion2" border="0" class="w-full" />
                  </div>
                </div>
                <div class="flex justify-center w-full py-2 gap-2">
                  <a href="#item1" class="btn btn-xs">1</a>
                  <a href="#item2" class="btn btn-xs">2</a>
                  <a href="#item3" class="btn btn-xs">3</a>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </body>
      <footer>
        <FooterDaysi />
      </footer>
      
    </div>
  );
}

export default App;
