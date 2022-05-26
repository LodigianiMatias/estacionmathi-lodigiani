import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useCartContext } from "../context/CartContext"

const Carrito = () => {

  const { carrito, clearCart, deleteFromCart } = useCartContext()
  const [estado, setEstado] = useState(true)
  const [estadoCompra, setEstadoCompra] = useState(false)

  // const subtotal = carrito.map(m => m.cantidad * m.precio)


  useEffect(() => {
    if (carrito === false) {
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

  const terminarCompra = () => {
    setEstadoCompra(true)
  }

  const saveCart = async () => {

    const user = {
      nombre: 'Juan',
      apellido: 'Perez',
      telefono: '1100000000',
      email: 'juanperez@gmail.com'
    }


    const orderToSave = {
      user: user,
      productos: carrito.map(p => p.producto),
      cantidad: carrito.map(c => c.cantidad),
      total: total
    }

    console.log(orderToSave);

    const db = getFirestore()
    const buyersCollection = collection(db, 'buyers')

    const response = await addDoc(buyersCollection, orderToSave)
    console.log(response.id);
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
                            <div className="rounded-full w-40 h-40 ring ring-primary ring-offset-base-100 ring-offset-2">
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
                        <Link to={`/productos/${c.producto}`}><button className='border-1 border-black border-solid rounded-md text-xs font-bold btn btn-s hover:bg-green-500 bg-green-300 text-black'>Modificar Cantidad</button></Link>
                        <button onClick={() => handleDeleteProduct(c.id)} className='border-1 border-black border-solid rounded-md text-xs font-bold btn btn-s hover:bg-green-500 bg-green-300 text-black'>Borrar producto</button>
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
                <a href="#item1"> <button
                  className='border-1 border-black border-solid rounded-md text-md btn btn-s hover:bg-green-500 bg-green-300 text-black'
                  onClick={terminarCompra}>
                  Terminar compra</button>
                </a>
              </div>
            </div>
          </div>


          <button onClick={clearCart} className='border-1 border-black border-solid rounded-md text-xl btn btn-s hover:bg-green-500 bg-green-300 text-black mb-24 mt-5'>
            vaciar carrito completo
          </button>

          {estadoCompra &&

            <>
              <div id="item1" className="w-2/4 mb-10 text-6xl text-white bg-slate-800 relative left-1/4 rounded-xl font-bold underline" data-aos="zoom-in">
                Ingrese sus datos<br /><br />
                <div className="text-3xl">
                  <form>
                  <input type="text" placeholder="Nombre" className="input w-full max-w-xs" /><br/><br/>
                  <input type="text" placeholder="Apellido" className="input w-full max-w-xs" /><br/><br/>
                  <input type="text" placeholder="Telefono" className="input w-full max-w-xs" /><br/><br/>
                  <input type="email" placeholder="E-mail" className="input w-full input-md max-w-xs" /><br/><br/>
                  </form>
                  <button
                    className='border-1 border-black border-solid rounded-md text-md btn btn-s hover:bg-green-500 bg-green-300 text-black'
                    onClick={saveCart}>
                    Realizar pedido</button><br /><br />
                </div>
              </div>
            </>}


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