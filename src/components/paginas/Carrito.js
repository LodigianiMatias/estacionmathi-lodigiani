import { useCartContext } from "../context/CartContext"

const Carrito = () => {

  const{carrito} = useCartContext()

  return (
    <>
    <div>Carrito</div>
    {carrito.map (c => <strong key={c.id}> {c.producto} {c.count}</strong>)}
    </>
  )
}
export default Carrito