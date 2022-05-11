import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import { productosData } from "../data/productosData"
import { useCartContext } from "./context/CartContext";

const Contador = ({}) => {

  const {productoId} = useParams()
  const [stock, setStock] = useState({})

  const { addToCart } = useCartContext()
  
  useEffect(() => {
    setStock(productosData.find(p => p.producto == productoId))
  }, [productoId])
  const [estado, setEstado] = useState(true)
  const [count, setCount] = useState(0)

  const addHandler = () => {
    if (count < stock.stock) {
      setCount(count + 1)
    }
  }
  const resHandler = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }
  const agregarCarrito = () => {
    if (!count == 0) {
    console.log({count});
    setEstado(false)
  }
  }

  const handleClick = (id , cantidad) => {
    const findProduct = productosData.find((producto) => producto.id == id)
    addToCart(findProduct, cantidad)
    setEstado(false)
  }

  return (
    <div>
      {estado && 
      <div>
      <div>Stock: {stock.stock}</div>
      <button onClick={resHandler} className='border-1 border-black border-solid rounded-md text-xl w-12 btn btn-s hover:bg-green-500 bg-green-300 text-black'> - </button>
      <strong className="border-1 border-black border-solid rounded-md text-xl w-12 btn btn-s hover:bg-green-500 bg-green-300 text-black"> {count} </strong>
      <button onClick={addHandler} className='border-1 border-black border-solid rounded-md text-xl w-12 btn btn-s hover:bg-green-500 bg-green-300 text-black'> + </button><br></br>
      <button onClick={() => handleClick(id, count)} className='border-1 border-black border-solid rounded-md text-2xl btn btn-s hover:bg-green-500 bg-green-300 text-black'>agregar al carrito</button>
    </div>}
    {!estado && 
      <div>
        <div className='text-xl font-bold text-white'>Se agregaron {count} al carrito</div>
        <Link to={'/productos'}>
        <div className='border-1 border-black border-solid rounded-md text-xl btn btn-s bg-green-300 hover:bg-green-500  text-black'>Seguir comprando</div>
        </Link>
        <br></br>
        <Link to={'/carrito'}>
        <div className='border-1 border-black border-solid rounded-md text-xl btn btn-s bg-green-300 hover:bg-green-500  text-black'>Ir al carrito</div>
        </Link>
      </div>
    }
    </div>
  )
}
export default Contador