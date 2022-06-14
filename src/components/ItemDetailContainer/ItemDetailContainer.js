import { useState, useEffect} from "react";
import { getProductoByID } from "../../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";


const ItemDetailContainer = ( ) => {
    const [producto, setProducto] = useState()
    const {productoId} = useParams()

    useEffect(() => {
        getProductoByID(productoId).then(response => {
            setProducto(response)
        })        
    }, [])
    console.log(producto)


    return (
        <>
            <h1>Detalle del Producto</h1>
            <ItemDetail {...producto}/>
        </>
    )
}

export default ItemDetailContainer