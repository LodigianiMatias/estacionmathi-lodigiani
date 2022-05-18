import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useCartContext } from "../context/CartContext"

const Carrito = () => {

  const { carrito } = useCartContext()
  const { clearCart } = useCartContext()
  const {deleteFromCart} = useCartContext()
  const [estado, setEstado] = useState(true)
 

  useEffect(() => {
    if (carrito == false) {
      setEstado(false)
    }
  }, [carrito])

  return (
    <>
      <div className="text-6xl font-bold text-black underline mt-2">Carrito</div>
      {estado && 
      <div>
      {carrito.map(c =>
        <li
          className="text-xl font-bold text-black m-10 " key={c.id}>
          <img src={c.img} className="h-48 inline-block"></img>
          {c.producto} cantidad:{c.quantity}
          <button onClick={deleteFromCart} className='border-1 border-black border-solid rounded-md text-xl btn btn-s hover:bg-green-500 bg-green-300 text-black'>Borrar producto</button>
        </li>)}
      <button onClick={clearCart} className='border-1 border-black border-solid rounded-md text-xl btn btn-s hover:bg-green-500 bg-green-300 text-black mb-20'>
        vaciar carrito completo
      </button>
    </div>
      }
      {!estado && 
      <div>
        <div className="mt-20 mb-10 relative text-6xl font-bold text-black w-2/4 left-1/4">No hay productos en el carrito, por favor agregue productos para realizar su compra
      </div>
      <Link to= {'/productos'}>
        <button className='border-1 border-black border-solid rounded-md text-xl btn btn-s hover:bg-green-500 bg-green-300 text-black mb-60'>
          Ir al catalogo de productos
        </button>
      </Link>
      </div>
      }
    </>
  )
}
export default Carrito