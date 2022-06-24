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

    const isInCart = (id ) => {
        return cart.some(prod => prod.id === id )
    }

//    const getCartQuantity = () => {
//        let totalQuantity = 0

//        cart.forEach(prod => {
//            totalQuantity += prod.quantity
//        })

//        return totalQuantity
//    }

    return (
        <CartContexto.Provider value={{cart, addItem, removeItem, isInCart , totalQuantity}}>

                {children}

        </CartContexto.Provider>


    )
}

export default CartContexto