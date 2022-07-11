import { useContext, useState } from "react"
import CartContexto from  "../../context/CartContext"
import Seleccionar from "../Seleccionar/Seleccionar"
import ItemCart from "../ItemCart/ItemCart"
import {addDoc , collection, writeBatch, getDocs , documentId  , query, where } from "firebase/firestore"

import { useNotificacion } from "../../Notification/Notification"

import { db } from "../../services/firebase/index"


const Compra = () => {

    const [cargando, setCargando] = useState(false)
    const { cart, clearCart, getTotal, getQuantity } = useContext(CartContexto)

    const total = getTotal()

    const setNotificacion = useNotificacion()

    const handleCreateOrder = () => {
        setCargando(true)
        console.log("orden creada")

        const objOrder = {
            comprador: {
                nombre: "Diego Bandhy",
                celular: "123566",
                direccion: "Jr. 124",
                correo: "test@test.com"

            },

            // items: cart,
            // total: total
        }

        const batch = writeBatch(db)

        const ids = cart.map( prod => prod.id)

        const fueraDeStock = [ ] 

        const collectionRef = collection(db, "productos") 

        getDocs(query(collectionRef, where(documentId(), "in" , ids)))
            .then(response => {
                response.docs.forEach(doc => {
                    const dataDoc = doc.data()
                    const prod = cart.find(prod => prod.id === doc.id)
                    const prodQuantity = prod.quantity

                    //PARA ACTUALIZAR EL STOCK. EL STOCK INICIAL MENOS LO COMPRADO
                    if(dataDoc.stock >= prodQuantity) {
                        batch.update(doc.ref,  { stock: dataDoc.stock - prodQuantity })
                    } else {
                        fueraDeStock.push({ id: doc.id, ...dataDoc })

                    }
                })
            }).then(() => {
                if (fueraDeStock.length === 0) {
                    const collectionRef = collection(db, "orders")

                    return addDoc(collectionRef, objOrder)
                } else {
                    return Promise.reject({type: "fuera_de_stock", productos: fueraDeStock})
                }
            }).then(({id}) => {
                batch.commit()
                clearCart()
                setNotificacion(`success`, `Su orden se generó correctamente con el id ${id}`)
            }).catch(error => {
                if (error.type ==="fuera_de_stock") {
                    setNotificacion(`error`, ` Hay productos sin stock`)
                } else {
                    console.log(error)
                }

            }).finally(() => {
                setCargando(false)
            })
        console.log(ids)

    }

  
    if(cargando) {
        return <h1>Se está generando su orden</h1>
    }

    // if(getQuantity() === 0) {
    //     return <h1>NO AGREGÓ PRODUCTOS</h1>
    // }
    

    return (
        <>    

            <h1>    COMPRA </h1>
            
                <main>
                    {cart.map(prod => <ItemCart key={prod.id} {...prod} />)}
                    <h3> Total: ${total} </h3>
                    <button onClick={() => clearCart()} >Limpiar carrito</button>
                    <button onClick={handleCreateOrder } >Generar Orden</button>
                </main>
                                <h2> Seleccione la opción de compra </h2>
                                        <Seleccionar/> 
        </>        
    )
    
}

export default Compra