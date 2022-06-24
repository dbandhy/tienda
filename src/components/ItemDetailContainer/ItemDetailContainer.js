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
    }, [productoId])
//    console.log(producto)

//let params = useParams()
//useEffect(() => {
//    const getItem = new Promise ((res, rej) => {
//        setTimeout(()=> {
 //           if (params.id) {
//                res(producto.filter(producto => producto.id === params. id))

//            } else {
//                rej(console.log("No encontrado"))
//            }
//        }, 2000)
//    })

//    getItem.then((producto) => {
//        setProducto(producto)
//    })
//}, [params])

//console.log(producto)


    return (
        <>
            <h1>Detalle del Producto</h1>
            <ItemDetail {...producto}/>
        </>
    )
}

export default ItemDetailContainer