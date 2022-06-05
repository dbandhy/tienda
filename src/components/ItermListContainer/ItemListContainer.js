import "./ItemListContainer.css"
import ItemList from  "../ItemList/ItemList.js"
import { useState, useEffect } from "react"
import { getProductos } from "../../asyncmock"

const ItemListContainer = (props) => {

    const [productos, SetProductos] = useState([])

    useEffect(() => {
        getProductos().then(response => {
            SetProductos(response)
        })
        
    }, [])

//    const ComponenteProductos = productos.map(producto => {
//        return (
//            <li key={producto.id}>
//                {producto.nombre}


//            </li>
//        )
//    })
    
    console.log(productos)
    return (
        <div>
            <h1 className="titulo1">{props.greeting}</h1>

                
            
            <ItemList productos= {productos} />
        </div>
    )
}

export default ItemListContainer