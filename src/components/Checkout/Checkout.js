
import { useContext, useState } from "react";
import CartContexto from "../../context/CartContext";
import { useNotificacion } from "../../Notification/Notification";
import {
  addDoc,
  collection,
  writeBatch,
  getDocs,
  query,
  where,
  documentId,
} from "firebase/firestore";
import { db } from "../../services/firebase";

const Formulario = () => {
  const [loading, setLoading] = useState(false);

  const { cart, total, clearCart } = useContext(CartContexto);  

  const setNotificacion = useNotificacion();

  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    setValues({ ...values, [name]: value });
  };

  const handleCreateForm = () => {
    setLoading(true);

    const objOrder = {
      buyer: {
        name: values.name,
        email: values.email,
        phone: values.phone,
        address: values.address,
      },
      items: cart,
      total: total,
    };

    const batch = writeBatch(db);

    const ids = cart.map((prod) => prod.id);

    const outOfStock = [];

    const collectionRef = collection(db, "productos");

    getDocs(query(collectionRef, where(documentId(), "in", ids)))
      .then((response) => {
        response.docs.forEach((doc) => {
          const dataDoc = doc.data();
          const prod = cart.find((prod) => prod.id === doc.id);
          const prodQuantity = prod.quantity;

          if (dataDoc.stock >= prodQuantity) {
            batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity });
          } else {
            outOfStock.push({ id: doc.id, ...dataDoc });
          }
        });
      })
      .then(() => {
        if (outOfStock.length === 0) {
          const collectionRef = collection(db, "orders");

          return addDoc(collectionRef, objOrder);
        } else {
          return Promise.reject({
            type: "out_of_stock",
            products: outOfStock,
          });
        }
      })
      .then(({ id }) => {
        batch.commit();
        clearCart();
        setNotificacion("success", `El id de compra es: ${id}`);
      })
      .catch((error) => {
        if (error.type === "out_of_stock") {
          setNotificacion("error", "Sin stock");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (loading) {
    return <h1>Se esta generando su orden...</h1>;
  }

  return (
    <div>
      <h1>Formulario</h1>
      <form>
        <input
          type="text"
          placeholder="Enter Name"
          onChange={handleChange}
          name="name"
          value={values.name}
        />
        <input
          type="text"
          placeholder="Enter email"
          className="inputCheck"
          name="email"
          value={values.email}
        />
        <input
          type="text"
          placeholder="Enter Phone"
          onChange={handleChange}
          name="phone"
          value={values.phone}
        />
        <input
          type="text"
          placeholder="Enter Address"
          onChange={handleChange}
          name="address"
          value={values.address}
        />
        {/* <button
          variant="primary"
          type="submit"
          // onClick={() => handleCreateForm()}
        >
          Enviar orden
        </button> */}
      </form>
    </div>
  );
};

export default Formulario;





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







