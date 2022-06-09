import { Link } from "react-router-dom"

const FooterDaysi = () => {
    const estilos = {
        color: 'green'
    }

    return (
        <div className="relative bottom-0 w-full">
            <footer className="footer p-10  bg-black text-base-content position:relative; bottom: 0px">
                <div>
                    <img src="https://i.ibb.co/0sZMP3V/logo-reducido-black.png" className="h-28"></img>
                    <p className="text-2xl">Almacén natural minorista</p>
                </div>
                <div>
                    <span className="footer-title" style={estilos}>MENU</span>
                    <Link to={'/productos'} className="link link-hover">Productos</Link>
                </div>
                <div>
                    <span className="footer-title" style={estilos}>AYUDA</span>
                    <a className="link link-hover">Preguntas frecuentes</a>
                    <a className="link link-hover">¿Cómo comprar?</a>
                    <a className="link link-hover">Envios</a>
                </div>
                <div>
                    <span className="footer-title" style={estilos}>CONTACTO</span>
                    <a href="https://www.google.com/maps/place/Estaci%C3%B3n+Natural+MaThi/@-34.6339549,-58.4631112,15z/data=!4m2!3m1!1s0x0:0x8246cea6822f6ddf?sa=X&ved=2ahUKEwj6wNaG8aD4AhUkg5UCHdM1DkIQ_BJ6BAhKEAU" 
                    className="link link-hover"
                    target="_blank">Avenida Directorio 2565, Flores CABA.</a>
                    <a className="link link-hover">+54 9 11 0000-0000</a>
                    <a className="link link-hover">estacionnaturalmathi@gmail.com</a>
                </div>
            </footer>
        </div>
    )
}
export default FooterDaysi