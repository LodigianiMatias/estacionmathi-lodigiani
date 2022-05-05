import { useEffect, useState } from "react"
import { productosData } from "../data/productosData";

const Contador = () => {
  let stock = 10

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
    alert(`la cantidad de productos es ${count}`)
    setCount(0)
  }

  return (
    <div>
      <button onClick={resHandler} className='border-1 border-black border-solid rounded-md text-xl w-12 btn btn-s hover:bg-green-500 bg-green-300 text-black'> - </button>
      <strong className="border-1 border-black border-solid rounded-md text-xl w-12 btn btn-s hover:bg-green-500 bg-green-300 text-black"> {count} </strong>
      <button onClick={addHandler} className='border-1 border-black border-solid rounded-md text-xl w-12 btn btn-s hover:bg-green-500 bg-green-300 text-black'> + </button><br></br>
      <button onClick={agregarCarrito} className='border-1 border-black border-solid rounded-md text-2xl btn btn-s hover:bg-green-500 bg-green-300 text-black'>agregar al carrito</button>
    </div>
  )
}
export default Contador