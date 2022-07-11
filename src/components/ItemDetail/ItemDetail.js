
import { useContext , useState  } from "react";
import CartContexto from "../../context/CartContext"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom";
// import NotificacionContexto from "../../Notification/Notification";
import { useNotificacion } from "../../Notification/Notification";



const ItemDetail = ({ id, nombre, precio, stock, categoria, descripcion, img}) => {
    const [quantityAdded, setQuantityAdded] = useState(0)
    
    const { addItem } = useContext(CartContexto)

    const setNotificacion = useNotificacion()
    
//    console.log(setCart)
    const handleOnAdd = (quantity) => {
        setNotificacion("gracias por pensar en Hi Honey!" , `se agregaron ${quantity} ${nombre} `)

        addItem ({id, precio, nombre, quantity })
       setQuantityAdded(quantity)
}
    return (
            <article>
                <h2>Detalle: {nombre}</h2>
                <h4> Categoría: {categoria}</h4>
                        <h3>ID: {id}</h3>    
                        
                        <picture> Fuente: Hi Honey! <img src={img} alt={nombre}/> </picture>   
                            
                        <h3>Producto: {descripcion}</h3>    
                        {/* <BotonContar onAdd={(count) => console.log(count)} />
                        <InputContar onAdd={(count) => console.log(count)}  /> */}
                
                        <h4> Precio: {precio}</h4>
                        <main>
                    disponibilidad: {stock}
                        

                
                    { quantityAdded === 0
                        ? <ItemCount stock={stock} onAdd={handleOnAdd} />
                        : <Link to='/cart' > Terminar compra </Link>
                    }
                        </main>
            </article>
    )
}

export default ItemDetail