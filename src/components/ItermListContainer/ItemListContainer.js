import "./ItemListContainer.css"
import ItemList from  "../ItemList/ItemList.js"

const ItemListContainer = (props) => {
    return (
        <div>
            <h1 className="titulo1">{props.greeting}</h1>
            <ItemList />
            
        </div>
    )
}

export default ItemListContainer