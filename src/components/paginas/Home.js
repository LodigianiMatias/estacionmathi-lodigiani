import ConoceProductos from "../ConoceProductos"
import ItemListDestacados from "../itemList/ItemListDestacados"
import TableCarousel from "../TableCarousel"

const Home = () => {
  return (
    <div>
      <TableCarousel/>
      <ConoceProductos conocer={"PRODUCTOS DESTACADOS"}/>
      <ItemListDestacados/>
      <ConoceProductos conocer={"SEGUINOS EN NUESTRAS REDES"}>
      </ConoceProductos>
      <div className="flex justify-around bg-[url('https://i.ibb.co/VpGwVbW/abstract-background-black-multicolor-wallpaper-preview.jpg')] mb-1">
        <div>
          <a href="https://www.instagram.com/estacionmathi/" target="_blank" rel="noreferrer">
            <img className="h-40" src="https://iconnicz.000webhostapp.com/src/multimedia/fotos/iconoinstagram.png" alt="Instagram"></img>
          </a>
        </div>
        <div>
          <a href="https://www.facebook.com/Estaci%C3%B3n-Natural-MaThi-448270959041252" target="_blank" rel="noreferrer">
            <img className="h-40" src="https://iconnicz.000webhostapp.com/src/multimedia/fotos/iconofacebook.png" alt="Facebook"></img>
          </a>
        </div>
        </div>        
    </div>
  )
}
export default Home