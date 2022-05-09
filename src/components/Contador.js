import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { productosData } from "../data/productosData";

const Contador = () => {
  let stock = 10

  const [estado, setEstado] = useState(true)
  const [count, setCount] = useState(0)

  const addHandler = () => {
    if (count < stock) {
      setCount(count + 1)
    }
  }
  const resHandler = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }
  const agregarCarrito = () => {
    console.log({count});
    setEstado(false)
  }

  return (
    <div>
      {estado && 
      <div>
      <button onClick={resHandler} className='border-1 border-black border-solid rounded-md text-xl w-12 btn btn-s hover:bg-green-500 bg-green-300 text-black'> - </button>
      <strong className="border-1 border-black border-solid rounded-md text-xl w-12 btn btn-s hover:bg-green-500 bg-green-300 text-black"> {count} </strong>
      <button onClick={addHandler} className='border-1 border-black border-solid rounded-md text-xl w-12 btn btn-s hover:bg-green-500 bg-green-300 text-black'> + </button><br></br>
      <button onClick={agregarCarrito} className='border-1 border-black border-solid rounded-md text-2xl btn btn-s hover:bg-green-500 bg-green-300 text-black'>agregar al carrito</button>
    </div>}
    {!estado && 
      <div>
        <div className='text-xl font-bold text-white'>Agregado al carrito</div>
        <Link to={'/productos'}>
        <div className='border-1 border-black border-solid rounded-md text-xl btn btn-s bg-green-300 hover:bg-green-500  text-black'>Volver a productos</div>
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