const TableCarousel = () => {
  return (
    <div id='tabla-principal' className="relative top-10 flex justify-center pb-5">
          <table id='renglon-tabla'>
            <tr >
              <td className="bg-green-300 rounded-xl">
                <div data-aos="fade-right">
                  <h2 className='font-bold text-black max-w-screen-sm text-2xl'>Estacion Natural MaThi es un almacen natural ubicado en el barrio de Flores donde podrás encontrar todo tipo de productos, entre ellos apto diabéticos, celíacos, hipertensos. Tambien hay frutos secos, semillas, especias, legumbres, cereales, etc. Te invitamos a conocer nuestro local en Avenida Directorio 2565. </h2>
                </div>
              </td>
              <td id='celda-carousel' className="max-w-screen-sm">
                <div class="carousel w-full rounded-xl">
                  <div id="item1" class="carousel-item w-full">
                    <img src="https://i.ibb.co/MScrFvJ/Estacion1.jpg" alt="Estacion1" border="0"/>
                  </div>
                  <div id="item2" class="carousel-item w-full">
                    <img src="https://i.ibb.co/XJNdnSn/Estacion3.jpg" alt="Estacion3" border="0"/>
                  </div>
                  <div id="item3" class="carousel-item w-full">
                    <img src="https://i.ibb.co/8BHcPpZ/Estacion2.jpg" alt="Estacion2" border="0"/>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
              </td>
              <td>
              <div class="flex justify-center w-full py-2 gap-2 pb-10">
                  <a href="#item1" class="btn btn-s hover:bg-green-500 bg-green-300 text-black">1</a>
                  <a href="#item2" class="btn btn-s hover:bg-green-500 bg-green-300 text-black">2</a>
                  <a href="#item3" class="btn btn-s hover:bg-green-500 bg-green-300 text-black">3</a>
                </div>
              </td>
            </tr>
          </table>
        </div>
  )
}
export default TableCarousel