import { db } from "."
import { query, getDocs , where, collection } from "firebase/firestore"
import { createAdapterProdFromFirebase } from "../../adapter/productoAdapter"

export const getProductos = (categoriaId) => {
    return new Promise ((resolve, reject) => {
        const collectionRef = categoriaId ? (query(collection(db, 'productos'), where('categoria', '==', categoriaId))) : (collection(db, 'productos') )
        
        getDocs(collectionRef).then(response => {
            const productosFirebase = response.docs.map(doc => {
                return createAdapterProdFromFirebase(doc)
            })
            resolve(productosFirebase)
        }).catch(error => {
            reject(error)
        })
    })
}