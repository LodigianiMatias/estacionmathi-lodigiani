import { useCartContext } from "../context/CartContext"

const Carrito = () => {

  const {carrito} = useCartContext()
  
  return (
    <>
    <div className="text-6xl font-bold text-black underline mt-2">Carrito</div>
    {carrito.map (c => <li className="text-xl font-bold text-black m-10 " key={c.id}><img src={c.img} className="h-48 inline-block"></img> producto:{c.producto} cantidad:{c.count}</li>)}
    </>
  )
}
export default Carrito