import "./ItemListContainer.css"
import ItemList from  "../ItemList/ItemList.js"
import { useState, useEffect } from "react"
import { getProductos , getProductoByCategoria } from "../../asyncmock"
import { useParams } from "react-router-dom"

const ItemListContainer = (props) => {

    const [productos, SetProductos] = useState([])
    const [cargando, setCargando] = useState(true)

    //Este id proviene de la URL
    const { categoriaId } = useParams()

    useEffect(() => {
        setCargando(true)

        if(!categoriaId) {
            getProductos().then(prods => {
                SetProductos(prods)
            }).catch(error =>  {
                console.log(error)
            }).finally(() => {
                setCargando(false)
            })
        } else {
            getProductoByCategoria(categoriaId).then(prods => {
                SetProductos(prods)
            }).catch(error =>  {
                console.log(error)
            }).finally(() => {
                setCargando(false)
            })
        }
        
    }, [categoriaId])

    if (cargando) {
        return <h1>Cargando producto...</h1>
    }

//    const ComponenteProductos = productos.map(producto => {
//        return (
//            <li key={producto.id}>
//                {producto.nombre}


//            </li>
//        )
//    })
    
    console.log(categoriaId)
    return (
        <div>
            <h1 className="titulo1">{props.greeting}</h1>
            {productos.length > 0 
                ? <ItemList productos ={productos}/>
                : <h1>PROXIMAMENTE</h1>
            }

                
            

        </div>
    )
}

export default ItemListContainer