import "./Item.css"
import { Link } from "react-router-dom";
//import { useContext } from "react";
// import { Contexto } from "../../App";


const Item = ( { id, nombre , img, precio, categoria } ) => {


    return(
    
        <article className="imagendeproducto" onClick={() => console.log("hiciste click en item")}> 
            <h2>{nombre}</h2>
            <picture>
                <img src={img} alt={nombre} />
            </picture>
            <section>
                <p>
                    Precio: ${precio}
                </p>
                <p>
                    ${categoria}
                </p>
            </section>
            <footer>
            <Link to={`/detalle/${id}`} >Detalle</Link>
            </footer>
        
            </article>
        
    )
}

export default Item