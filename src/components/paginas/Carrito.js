import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useCartContext } from "../context/CartContext"

const Carrito = () => {

  const { carrito, clearCart, deleteFromCart } = useCartContext()
  const [estado, setEstado] = useState(true)

  const subtotal = carrito.map(m => m.cantidad * m.precio)
  

  useEffect(() => {
    if (carrito == false) {
      setEstado(false)
    }
  }, [carrito])

  let total = 0

	for (let i = 0; i < carrito.length; i++) {
		const price = carrito[i].precio * carrito[i].cantidad

		total += price
	}

  

  const handleDeleteProduct = (id) => {
    deleteFromCart(id)
  }

  return (
    <>
      <div className="text-6xl font-bold text-black underline mt-5 mb-5">Carrito</div>

      {estado &&
        <div>
          <div className="ml-5 mr-5">
            <table className="table w-3/4 relative left-60">
              <thead>
                <tr>
                  <th className="w-1/4"></th>
                  <th className="relative w-1/4">Producto</th>
                  <th className="relative">Cantidad</th>
                </tr>
              </thead>
            </table>
          </div>
          {carrito.map(c =>
            <div className="ml-5 mr-5" key={c.id}>
              <div className="overflow-x-auto w-full">
                <table className="table w-3/4 relative left-60">
                  <tbody>
                    <tr>
                      <td className="w-1/4 relative">
                        <div className="flex justify-center">
                          <div className="avatar">
                            <div className="rounded-xl w-40 h-40">
                              <img src={c.img} alt={c.producto} />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="w-1/4">
                        <span>{c.producto}</span>
                        <br />
                        <span className="badge badge-ghost badge-sm">{c.marca}</span>
                      </td>
                      <td>{c.cantidad}</td>

                      <th className="relative w-80">
                        <Link to={`/productos/${c.producto}`}><button className='border-1 border-black border-solid rounded-md text-md btn btn-s hover:bg-green-500 bg-green-300 text-black'>Modificar Cantidad</button></Link>
                        <button onClick={() => handleDeleteProduct(c.id)} className='border-1 border-black border-solid rounded-md text-md btn btn-s hover:bg-green-500 bg-green-300 text-black'>Borrar producto</button>
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>)}

          <div className="border rounded-xl w-80 bg-base-100 shadow-xl absolute right-64">
            <div className="card-body flex justify-end">
              <h2 className="card-title flex justify-center">Total: ${total}</h2>
              <div className="card-actions justify-center">
                <button className='border-1 border-black border-solid rounded-md text-md btn btn-s hover:bg-green-500 bg-green-300 text-black'>Realizar Compra</button>
              </div>
            </div>
          </div>


          <button onClick={clearCart} className='border-1 border-black border-solid rounded-md text-xl btn btn-s hover:bg-green-500 bg-green-300 text-black mb-24 mt-5'>
            vaciar carrito completo
          </button>


        </div>
      }
      {!estado &&
        <div>
          <div className="mt-20 mb-10 relative text-6xl font-bold text-black w-2/4 left-1/4">No hay productos en el carrito, por favor agregue productos para realizar su compra
          </div>
          <Link to={'/productos'}>
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