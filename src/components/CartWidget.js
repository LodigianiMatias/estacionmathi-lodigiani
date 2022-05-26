import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "./context/CartContext";

const CartWidget = () => {
  const {carrito} = useCartContext()
  const [estado, setEstado] = useState(false) 

  const botonEstado = () => {
      if (estado === false) {
        setEstado(true)
      } else {
        setEstado(false)
      }
  }

  let total = 0

  for (let i = 0; i < carrito.length; i++) {
    const price = carrito[i].precio * carrito[i].cantidad
    total += price
  }
    
    return (
        <div className="flex-none">
            <div className="dropdown dropdown-end ml-5 mr-5">
                <label tabIndex="0" className="btn btn-ghost btn-circle text-white">
                    <div className="indicator">
                        <button onClick={botonEstado}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        <span className="badge badge-sm indicator-item">{carrito.length}</span>
                        </button>
                    </div>
                </label>
                {estado && 
                <>
                <div tabIndex="0" className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                    <div className="card-body">
                        <span className="font-bold text-lg">{carrito.length} Articulos</span>
                        <span className="text-info">Total: ${total}</span>
                        <Link to={'/carrito'}>
                        <div className="card-actions">
                        <button className="btn btn-primary btn-block">Ver Carrito</button>
                        </div>
                        </Link>
                    </div>
                </div>
                </>}
            </div>
        </div>
    )
}
export default CartWidget