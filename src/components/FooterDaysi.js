const FooterDaysi = () => {
    const estilos = {
        color: 'green'
    }

    return (
        <div class="relative bottom-0 w-full">
            <footer class="footer p-10  bg-black text-base-content position:relative; bottom: 0px">
                <div>
                    <img src="https://i.ibb.co/0sZMP3V/logo-reducido-black.png" className="h-28"></img>
                    <p>Almacén natural minorista</p>
                </div>
                <div>
                    <span class="footer-title" style={estilos}>MENU</span>
                    <a class="link link-hover">Productos</a>
                    <a class="link link-hover">Marcas</a>
                    <a class="link link-hover">Dietas</a>
                    <a class="link link-hover">Promociones</a>
                </div>
                <div>
                    <span class="footer-title" style={estilos}>AYUDA</span>
                    <a class="link link-hover">Preguntas frecuentes</a>
                    <a class="link link-hover">¿Cómo comprar?</a>
                    <a class="link link-hover">Envios</a>
                </div>
                <div>
                    <span class="footer-title" style={estilos}>CONTACTO</span>
                    <a class="link link-hover">Avenida Directorio 2565, Flores CABA.</a>
                    <a class="link link-hover">+54 9 11 0000-0000</a>
                    <a class="link link-hover">estacionnaturalmathi@gmail.com</a>
                </div>
            </footer>
        </div>
    )
}
export default FooterDaysi