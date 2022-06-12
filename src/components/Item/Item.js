import "./Item.css"
import {Link } from "react-router-dom";

const Item = ( { nombre , img, id } ) => {
    return(
    <li>
        <img className="imagendeproducto" src={img} alt={nombre}/>
        {nombre}
        <Link to={`/Detalle/${id}`} >Detalle</Link>
        </li>
    )
}

export default Item