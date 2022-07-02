import { useState, useEffect} from "react";
import { getProductoByID } from "../../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

import { getDoc , doc } from "firebase/firestore";
import { db } from "../../services/firebase";

const ItemDetailContainer = ( ) => {
    const [producto, setProducto] = useState()

    const [cargando, setCargando] = useState(true)
    const {productoId} = useParams()

    useEffect(() => {
        
        const docRef = doc(db, "productos", productoId)
        
        getDoc(docRef).then(doc => {
            console.log(doc)
            const productoFormateado = { id:  doc.id, ...doc.data() }
            setProducto(productoFormateado)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setCargando(false)
        })
        // getProductoByID(productoId).then(response => {
        //     setProducto(response)
        // })        
    }, [productoId])

    if(cargando) {
        return <h1>CARGANDO</h1>
    }
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