import "./ItemListContainer.css"
import ItemList from  "../ItemList/ItemList.js"
import { useParams } from "react-router-dom"
import { getProductos } from "../../services/firebase/firestore"
import { useAsync } from "../../hooks/useAsync"

const ItemListContainer = (props) => {


    const { categoriaId } = useParams()
    const { estaCargando, data, error } = useAsync(() => getProductos(categoriaId), [categoriaId])



    if (estaCargando) {
        return <h1>Cargando producto...</h1>
    }

    if (error) {
        return <h1>ERROR</h1>
    }

    return (
        <div>
            <h1 className="titulo1">{props.greeting}</h1>
            {data.length > 0 
                ? <ItemList productos={data}/>
                : <h1>PROXIMAMENTE</h1>
            }

                
            

        </div>
    )
}

export default ItemListContainer