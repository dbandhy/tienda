
import React, { useState, useContext} from 'react'
import CartContexto from '../../context/CartContext'
import { useNotificacion } from '../../Notification/Notification'
import { addDoc, collection, writeBatch, getDocs, query, where, documentId } from 'firebase/firestore'
import { db } from '../../services/firebase'

const Formulario = ({ createOrder }) => {
    
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        emailConfirmation: ''
    })

    const getContactData = (e) => {
        const { name, value } = e.target
        setForm((state) => {
            return { ...state, [name]: value }
        })
        console.log(form)
    }

    const finalizePurchase = () => {
        const { name, email, phone } = form
        createOrder({ name, email, phone })
    }
    const disabled = !(
        form.email.length &&
        form.name.length &&
        form.emailConfirmation.length &&
        form.phone.length > 0 &&
        form.email === form.emailConfirmation
    )


    return (
        <div>
            <h2>Datos de Contacto</h2>
            <form >
                <div>
                    <label></label>
                    <input placeholder="Nombre y Apellido" name="name" value={form.name} onChange={getContactData} type="text"/>
                </div>
                <div>
                    <label></label>
                    <input placeholder="Email" name="email" value={form.email} onChange={getContactData} type="email"/>
                </div>
                <div>
                    <label></label>
                    <input placeholder="Teléfono" name="phone" value={form.phone} onChange={getContactData} type="text"/>
                </div>
                <div>
                    <label></label>
                    <input placeholder="Confirma Email" name="emailConfirmation" value={form.emailConfirmation} onChange={getContactData} type="email"/>
                </div>
            </form>
            <button type="submit" disabled={disabled} onClick={finalizePurchase}>Enviar</button>
            
        </div>
    )
}
export default Formulario



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
//         setNotificacion("success", `El nuemro de Orden es: ${id}`);
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
//         <button
//           variant="primary"
//           type="submit"
//           onClick={() => handleCreateForm()}
//         >
//           Enviar orden
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Formulario;