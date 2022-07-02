

import { useContext } from "react"
import CartContexto from  "../../context/CartContext"
import Seleccionar from "../Seleccionar/Seleccionar"
import ItemCart from "../ItemCart/ItemCart"




const Compra = () => {

    const { cart, clearCart, getTotal, getQuantity } = useContext(CartContexto)
    
    // if(getQuantity() === 0) {
    //     return <h1>NO AGREGÓ PRODUCTOS</h1>
    // }
    
    return (
        <>    

            <h1>    COMPRA </h1>
                <main>
                    {cart.map(prod => <ItemCart key={prod.id} {...prod} />)}
                    <button onClick={() => clearCart()} >Limpiar carrito</button>
                    <button >Generar Orden</button>
                </main>
                                <h2> Seleccione la opción de compra </h2>
                                        <Seleccionar/> 
        </>        
    )
    
}

export default Compra