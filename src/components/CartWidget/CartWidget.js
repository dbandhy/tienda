import "./CartWidget.css"
import { useContext } from "react"
import CartContexto from "../../context/CartContext" 
import { Link } from "react-router-dom"

const CartWidget = () => {

    const  { getCartQuantity , totalQuantity } = useContext(CartContexto)

//    const totalQuantity = getCartQuantity()

    return (
        <Link to="/cart">
            <img src="images/widget.jpg" alt="cart-widget" className="img" />
            { totalQuantity }
        </Link>
    )
}

export default CartWidget