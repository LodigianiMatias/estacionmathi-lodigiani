import { createContext, useContext, useState } from "react"

export const CartContext = createContext({
    cart: [],
})

export const useCartContext = () => {
    return useContext (CartContext)
}

export const CartProvider = ( {children} ) => {
    const [carrito, setCarrito] = useState([])

    const addToCart = (p) => {
        setCarrito( current => {
            return current.concat( p )
        })
        console.log(carrito);
    }

    const clearCart = () => {
        setCarrito( [] )
    }

    const context = {
        carrito,
        addToCart,
        clearCart,
    }

    return (
        <CartContext.Provider value= { context }>
            {children}
        </CartContext.Provider>
    )
}

