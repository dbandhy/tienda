import "./ItemListContainer.css"
import ItemList from  "../ItemList/ItemList.js"
import { useState, useEffect } from "react"
//import { getProductos , getProductoByCategoria } from "../../asyncmock"
import { useParams } from "react-router-dom"
import { getDocs , collection , query, where } from "firebase/firestore"
import { db } from "../../services/firebase"


const ItemListContainer = (props) => {

    const [productos, SetProductos] = useState([])
    const [cargando, setCargando] = useState(true)

    const [banner, setBanner] = useState("BIENVENIDOS A HI HONEY!")
    //Este id proviene de la URL
    const { categoriaId } = useParams()

    useEffect(() => {
        setCargando(true)

        const collectionRef = categoriaId ? ( query(collection(db, 'productos'), where('categoria', '==', categoriaId))  ) : ( collection (db, 'productos') )

        getDocs(collectionRef).then(response => {
            const productosFirebase = response.docs.map(doc => {
                return {id: doc.id, ...doc.data() }
            })
            SetProductos(productosFirebase)
        }).catch(error => {
            console.log(error)
        }).finally(()=> {
            setCargando(false)
        })

        // if(!categoriaId) {
        //     getProductos().then(prods => {
        //         SetProductos(prods)
        //     }).catch(error =>  {
        //         console.log(error)
        //     }).finally(() => {
        //         setCargando(false)
        //     })
        // } else {
        //     getProductoByCategoria(categoriaId).then(prods => {
        //         SetProductos(prods)
        //     }).catch(error =>  {
        //         console.log(error)
        //     }).finally(() => {
        //         setCargando(false)
        //     })
        // }
        
    }, [categoriaId] )

    useEffect(() => {
        setTimeout(() => {
            setBanner("REVISA NUESTRO CATÁLOGO")
        }, 6000)
    }, [])

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
    
//    console.log(categoriaId)
    return (
        <div>
            <h1 className="titulo1">{banner}</h1>
            {productos.length > 0 
                ? <ItemList productos={productos}/>
                : <h1>PROXIMAMENTE</h1>
            }

                
            

        </div>
    )
}

export default ItemListContainer