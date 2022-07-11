import { useState , useEffect ,createContext } from "react"

const CartContexto = createContext()


export const CartProvider = ( { children }) => {
    const [cart , setCart ] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0)


    console.log(cart)


    useEffect (() => {
            let totalQuantity = 0

            cart.forEach(prod => {
                totalQuantity += prod.quantity
            })

            setTotalQuantity(totalQuantity)
    }, [cart])


    const addItem = (productoToAdd) => {
        if (!isInCart(productoToAdd.id))
        setCart([...cart, productoToAdd])

    }   
        const removeItem = (id) => {
        const cartWithoutProducto = cart.filter(prod => prod.id !== id)

        setCart(cartWithoutProducto)
    

    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (id ) => {
        return cart.some(prod => prod.id === id )
    }

    const getTotal = () => {
        let total = 0
        cart.forEach(prod => {
            total += prod.quantity * prod.precio
        })
    }


    return (
        <CartContexto.Provider value={{cart, addItem, removeItem, isInCart, clearCart, getTotal, totalQuantity}}>

                {children}

        </CartContexto.Provider>


    )
}

export default CartContexto