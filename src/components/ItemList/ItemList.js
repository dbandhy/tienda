import "./ItemList.css"
import Item from "../Item/Item.js"

const ItemList = ({productos}) => {
    return (
        <ul className="ListGroup">
        {
                    productos.map ( miel => <Item key={miel.id} {...miel}/>) 
                }

    
    </ul>

    )
} 

export default ItemList