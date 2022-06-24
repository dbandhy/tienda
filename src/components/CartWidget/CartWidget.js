import "./CartWidget.css"
import { useContext } from "react"
import CartContexto from "../../context/CartContext" 

const CartWidget = () => {

    const  { getCartQuantity , totalQuantity } = useContext(CartContexto)

//    const totalQuantity = getCartQuantity()

    return (
        <div>
            <img src="images/widget.jpg" className="img" alt="cart-widget"/>
            {totalQuantity}
        </div>
    )
}

export default CartWidget