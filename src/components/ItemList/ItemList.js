import Item from "../Item/Item.js"

const ItemList = ({productos}) => {
    return (
        <ul>
        {
                    productos.map ( miel => <Item key={miel.id} {...miel}/>) 
                }

    
    </ul>

    )
} 

export default ItemList