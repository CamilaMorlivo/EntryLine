import { createContext } from "react"
import { useState, useContext } from 'react'
import Swal from 'sweetalert2'

export const CartContext = createContext()

export const CartProvider = ({children}) =>{
    
    const [cart, setCart] = useState([])

    const addToCard = (item) =>{
        setCart([...cart, item])
    }

    

    const removeItem = (id) => {
        setCart( cart.filter((item) => item.id !== id))
    }

    const isInCart = (id) =>{
        return cart.find((item) => item.id === id)
    }

    const cartQuantity = () =>{
        return cart.reduce(( acc, item ) => acc + item.cantidad, 0)
    }

    const cartTotal = () => {
        return cart.reduce((acc, item) => acc + item.cantidad * item.precio, 0)
    }

    const emptyCart = () => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                setCart([])
            }
          })  
    }

    const terminarCompra = () => {
        setCart([])
    }

    const terminarCompraConSwalAlert = (id) => {
        Swal.fire({
            title: 'Compra exitosa',
            text: `Tu número de orden es: ${id}`,
            icon: 'success',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Genial!'
        })
    }

    return(
        <CartContext.Provider value={{
            cart,
            addToCard,
            isInCart, 
            cartQuantity, 
            cartTotal,
            emptyCart,
            removeItem,
            terminarCompra,
            terminarCompraConSwalAlert
        } }>
            {children}

        </CartContext.Provider>
    )

}

export const useCartContext = () => {
    return useContext(CartContext)
}
