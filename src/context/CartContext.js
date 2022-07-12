import { useState , useEffect ,createContext, useRef } from "react"

const CartContexto = createContext()


export const CartProvider = ( { children }) => {
    const [cart , setCart ] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0)

    // const renderRef = useRef(0)

    // useEffect(() => {
    //     const cartSaved = localStorage.getItem("cart")
    //     const cartParsed = JSON.parse(cartSaved)
    //     setCart(cartParsed)
    // }, [])

    // console.log(cart)

    // useEffect(() => {
    //     if(renderRef.current > 0) {
    //         localStorage.setItem("cart", JSON.stringify(cart))
    //     }
    //    renderRef.current += 1
        
    // }, [cart])

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

        return total
    }


    return (
        <CartContexto.Provider value={{cart, totalQuantity, addItem, removeItem, isInCart, clearCart, getTotal }}>

                {children}

        </CartContexto.Provider>


    )
}

export default CartContexto