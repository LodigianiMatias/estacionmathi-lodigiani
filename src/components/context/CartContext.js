import { createContext, useContext, useState } from "react"

const CartContext= createContext()
export const useCartContext = () => useContext(CartContext)


const CartContextProvider = ({children}) => {

    // Logica
    const [cart, setCart] = useState([])

    // Validar si está en el carrito
    const isInCart = (id) => cart.find(prod => prod.id === id)

    // Agregar item al carrito
    const addToCart = (producto, cantidad) => {
        const newCart = [...cart]

        const productoEnCart = isInCart(producto.id)

        if (productoEnCart) {
            newCart[newCart.findIndex((prod) => prod.id === productoEnCart.id)].quantity +=cantidad
            setCart(newCart)
            return
        }
        producto.quantity = cantidad
        setCart([...newCart, producto])
    }

    // Borrar item del carrito
    const deleteFromCart = (producto) => {
        const newCart = [...cart]

        const productoEnCart = isInCart(producto.id)

        if(!productoEnCart) {
            return
        }

        const borrarProducto = newCart.filter((prod) => prod.id !== producto.id)

        setCart(borrarProducto)
    }

    // Vaciar carrito
    const deleteCart = () => setCart([])
    console.log(cart)
  return (
    <CartContextProvider value={{
        cart, 
        addToCart,
        deleteCart,
        deleteFromCart,
        setCart,
    }}>
        {children}
    </CartContextProvider>
  )
}
export default CartContextProvider