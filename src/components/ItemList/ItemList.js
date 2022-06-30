import { memo } from "react"

import "./ItemList.css"
import Item from "../Item/Item.js"

const ItemList = ({productos}) => {
    return (
        <div className="ListGroup" onClick={() => console.log("Hice click en IL")}>
        {
                    productos.map ( miel => <Item key={miel.id} {...miel}/>) 
                }

    
    </div>

    )
} 

export default memo(ItemList)