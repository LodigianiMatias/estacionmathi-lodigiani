import { createContext, useContext, useState } from "react"

export const CartContext = createContext({
    carrito: [],
})

export const useCartContext = () => {
    return useContext (CartContext)
}

export const CartProvider = ( {children} ) => {
    const [carrito, setCarrito] = useState([])

    const isInCart = (id) => carrito.find((producto) => producto.id == id)

    const addToCart = (producto, cantidad) => {
        const newCarrito = [...carrito]

        const productoEnCarrito = isInCart(producto.id)

        if (productoEnCarrito) {
            newCarrito[
                newCarrito.findIndex((prod) => prod.id == productoEnCarrito.id)
            ].quantity += cantidad

            setCarrito(newCarrito)
            return
        } 

        setCarrito( current => {
           return current.concat(producto)
            
        })  
        console.log(carrito.count);
    }

    const deleteFromCart = (producto) => {
		const newCart = [...carrito]

        const productoEnCarrito = isInCart(producto.id)

        if (productoEnCarrito) {
            console.log(productoEnCarrito);
        }

		const deleteProduct = newCart.filter((prod) => prod.id !== producto.id)
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
    }

    return (
        <CartContext.Provider value= { context }>
            {children}
        </CartContext.Provider>
    )
}

