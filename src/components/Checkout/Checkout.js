
import "./checkout.css"
import { addDoc, collection, writeBatch, getDocs, query, where, documentId} from "firebase/firestore"
import { Link } from 'react-router-dom';
import { db } from "../../services/firebase";
import { useContext, useState } from "react";
import CartContexto from "../../context/CartContext";



const Formulario = () =>{
    const { cart, total, clearProducts } = useContext(CartContexto)

    const [cargando, setCargando] = useState(false)
    const [redirect, setRedirect ]= useState(false)
    const [nameUser, setNameUser] = useState('')
    const [emailuser, setEmailUser] = useState('')
    const [phoneUser, setPhoneUser] = useState('')


    const handleSubmit = (e) =>{
        setCargando(true)

        // const hoy = new Date();
        // const fecha = hoy.getDate() + '-' + ( hoy.getMonth() + 1 ) + '-' + hoy.getFullYear();
        // const hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();
        // const fechaYHora = fecha + ' ' + hora;

        e.preventDefault()
        handleNewOrder(nameUser,emailuser,phoneUser)
    }
     
    const handleNewOrder = (name, email, phone, data) =>{

        const newOrder = {
            comprador : {
                name: name ,
                email: email,
                phone: phone
            },
            // products: cart,
            // total: total,
            // data:data
        }
        const batch = writeBatch(db)

        const productsIds = cart.map(prod => prod.id)

        const collectionRef = collection(db, 'productos')

        const emptyStock = [] 

        getDocs(query(collectionRef, where(documentId(), 'in', productsIds)))
            .then(response => {
                response.docs.forEach(doc =>{
                    const dataDoc = doc.data()
                    const item = cart.find(prod => prod.id === doc.id)
                    const itemQuanity = item.quantity

                    if (dataDoc.stock >= itemQuanity){
                        batch.update(doc.ref, { stock: dataDoc.stock - itemQuanity })
                    }   else{
                        emptyStock.push({id: doc.id, ...dataDoc})
                    }

                })
            }).then(() =>{
                if(emptyStock.length === 0){
                    const collectionRef = collection(db, 'orders')

                   return addDoc(collectionRef, newOrder)
                }   else{
                    return Promise.reject( { type: 'empty_stock', products: emptyStock })
                }
            }).then(({ id }) =>{
                localStorage.setItem('idCheckout', id);
                batch.commit()
                clearProducts()
            }).catch(error =>{
                if(error.type === 'empty_stock'){
                    console.log('A algunos productros les falta stock')
                }   else{
                    console.log(error)
                }
            }).finally(()=>{
                setCargando(false)
                setRedirect(true)
            })
    }

    if(cargando){
        return(
            
                <h2>cargando...</h2>
            
        )
    }

    if(redirect){
        const idCheckout = localStorage.getItem('idCheckout')
        return (
        <div>

            <h1>código para el seguimiento de su compra {idCheckout}</h1>
            
            <Link to={'/'} >INICIO</Link>
        </div>
        )
    }

    else{
        return(
            <div>
                <ul>
                    {cart.map(prod => <li key={prod.id} >{prod.nombre}  x {prod.quantity}</li>)} 
                </ul>
                <h3>Total: {total}</h3>
                <div>
                    <form className="click"
                    onSubmit={handleSubmit}>
                        <div>

                            <div>
                                <input 
                                    type='text' 
                                    placeholder='nombre' 
                                    onChange={event =>setNameUser(event.target.value)} 
                                    required />
                                <input 
                                    type='email' 
                                    placeholder='email'  
                                    onChange={event =>setEmailUser(event.target.value)}
                                    required />
                                <input 
                                    type='number' 
                                    placeholder='teléfono' 
                                    value={phoneUser}
                                    onChange={event => {event.target.value.length <= 10 && setPhoneUser(event.target.value)}}  
                                    required />
                            </div>
                                    
                        </div>

                        <button>generar código de compra</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default Formulario


// FORMULARIOS PRESENTAN BUGS


// import { useContext, useState } from "react";
// import CartContexto from "../../context/CartContext";
// import { useNotificacion } from "../../Notification/Notification";
// import {
//   addDoc,
//   collection,
//   writeBatch,
//   getDocs,
//   query,
//   where,
//   documentId,
// } from "firebase/firestore";
// import { db } from "../../services/firebase";

// const Formulario = () => {
//   const [loading, setLoading] = useState(false);

//   const { cart, total, clearCart } = useContext(CartContexto);  

//   const setNotificacion = useNotificacion();

//   const [values, setValues] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     address: "",
//   });

//   const handleChange = (e) => {
//     const { target } = e;
//     const { name, value } = target;
//     setValues({ ...values, [name]: value });
//   };

//   const handleCreateForm = () => {
//     setLoading(true);

//     const objOrder = {
//       buyer: {
//         name: values.name,
//         email: values.email,
//         phone: values.phone,
//         address: values.address,
//       },
//       items: cart,
//       total: total,
//     };

//     const batch = writeBatch(db);

//     const ids = cart.map((prod) => prod.id);

//     const outOfStock = [];

//     const collectionRef = collection(db, "productos");

//     getDocs(query(collectionRef, where(documentId(), "in", ids)))
//       .then((response) => {
//         response.docs.forEach((doc) => {
//           const dataDoc = doc.data();
//           const prod = cart.find((prod) => prod.id === doc.id);
//           const prodQuantity = prod.quantity;

//           if (dataDoc.stock >= prodQuantity) {
//             batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity });
//           } else {
//             outOfStock.push({ id: doc.id, ...dataDoc });
//           }
//         });
//       })
//       .then(() => {
//         if (outOfStock.length === 0) {
//           const collectionRef = collection(db, "orders");

//           return addDoc(collectionRef, objOrder);
//         } else {
//           return Promise.reject({
//             type: "out_of_stock",
//             products: outOfStock,
//           });
//         }
//       })
//       .then(({ id }) => {
//         batch.commit();
//         clearCart();
//         setNotificacion("success", `El id de compra es: ${id}`);
//       })
//       .catch((error) => {
//         if (error.type === "out_of_stock") {
//           setNotificacion("error", "Sin stock");
//         }
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   };

//   if (loading) {
//     return <h1>Se esta generando su orden...</h1>;
//   }

//   return (
//     <div>
//       <h1>Formulario</h1>
//       <form>
//         <input
//           type="text"
//           placeholder="Enter Name"
//           onChange={handleChange}
//           name="name"
//           value={values.name}
//         />
//         <input
//           type="text"
//           placeholder="Enter email"
//           className="inputCheck"
//           name="email"
//           value={values.email}
//         />
//         <input
//           type="text"
//           placeholder="Enter Phone"
//           onChange={handleChange}
//           name="phone"
//           value={values.phone}
//         />
//         <input
//           type="text"
//           placeholder="Enter Address"
//           onChange={handleChange}
//           name="address"
//           value={values.address}
//         />
//         {/* <button
//           variant="primary"
//           type="submit"
//           // onClick={() => handleCreateForm()}
//         >
//           Enviar orden
//         </button> */}
//       </form>
//     </div>
//   );
// };

// export default Formulario;





// import { useContext } from 'react'
// import CartContexto from "../../context/CartContext"


// const Formulario = ({ id, apellido, correo, telefono }) => {
//     const { removeItem } = useContext(CartContexto)

//     const handleRemove = (id) => {
//         removeItem(id)
//     }

//     return (
//         <article>
//             <header>
//                 <h2>
//                     {apellido}
//                 </h2>
//             </header>
//             <section>
//                 <p>
//                     Correo: {correo}
//                 </p>
//                 <p>
//                     Teléfono: {telefono}
//                 </p>
//             </section>           
//             <footer>
//                  <p>
//                  </p>
//                  <button onClick={() => handleRemove(id)}>X</button>
//             </footer>
//         </article>
//     )
// }

// export default Formulario





// import React, { useState, useEffect, useContext } from "react";
// import { Link } from "react-router-dom";
// import CartContexto from "../../context/CartContext";

// const Formulario = () => {
//   const [totalPrice, setTotalPrice] = useState(0);
//   const { cart } = useContext(CartContexto);

//   useEffect(() => {
//     if (cart.length > 0) {
//       setTotalPrice(
//         cart
//           .map((product) => product.precio * product.quantity)
//           .reduce((total, valor) => total + valor)
//       );
//     }
//   }, [cart]);

//   return (
//     <div >
//       <div >
//         <div>Resúmen</div>
//         <div>
//           <h5>Total: ${totalPrice}</h5>
//           <p>Para continuar haz click en el botón.</p>
//           <Link to="/checkout">
//             Realizar compra
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Formulario







