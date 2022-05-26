import { createContext, useContext, useState } from "react"

export const CartContext = createContext({
    carrito: [],
})

export const useCartContext = () => {
    return useContext (CartContext)
}

export const CartProvider = ( {children} ) => {
    const [carrito, setCarrito] = useState([])
    const [estadoCompra, setEstadoCompra] = useState(false)

    const isInCart = (id) => carrito.find((producto) => producto.id == id)

    const addToCart = (producto) => {
        const newCarrito = [...carrito]

        const productoEnCarrito = isInCart(producto.id)

        if (productoEnCarrito) {
            newCarrito[
                newCarrito.findIndex((prod) => prod.id == productoEnCarrito.id)
            ]. cantidad = producto.cantidad
            setCarrito(newCarrito)
            return
        } 

        setCarrito( current => {
           return current.concat(producto)
        })  
    }

    const deleteFromCart = (id) => {
		const deleteProduct = carrito.filter((prod) => prod.id !== id)
		setCarrito(deleteProduct)
	}


    const clearCart = () => {
        setCarrito( [] )
    }

    const context = {
        carrito,
        deleteFromCart,
        addToCart,
        clearCart,
        setCarrito,
        isInCart,
    }

    return (
        <CartContext.Provider value= { context }>
            {children}
        </CartContext.Provider>
    )
}

