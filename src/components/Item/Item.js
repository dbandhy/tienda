import "./Item.css"


const Item = ( { nombre , img } ) => {
    return(
    <li>
        <img className="imagendeproducto" src={img} alt={nombre}/>
        {nombre}
        
        </li>
    )
}

export default Item