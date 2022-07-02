import { useContext } from 'react'
import CartContexto from "../../context/CartContext"


const ItemCart = ({ id, nombre, quantity, precio }) => {
    const { removeItem } = useContext(CartContexto)

    const handleRemove = (id) => {
        removeItem(id)
    }

    return (
        <article>
            <header>
                <h2>
                    {nombre}
                </h2>
            </header>
            <section>
                <p>
                    Cantidad: {quantity}
                </p>
                <p>
                    Precio x Unidad: ${precio}
                </p>
            </section>           
            <footer>
                 <p>
                     Subtotal: ${precio * quantity}
                 </p>
                 <button onClick={() => handleRemove(id)}>X</button>
            </footer>
        </article>
    )
}

export default ItemCart