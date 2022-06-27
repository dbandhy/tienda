import React, { Component } from "react";

class Seleccionar extends Component {
    recojo() {
        alert("Te enviaremos la dirección a tu correo electrónico");
    }

    envio() {
        alert("Mándanos tu dirección por correo electrónico");
    }

    render() {
        return (
            <div onClick={this.Seleccionar}>
                <button onClick={this.recojo}>Recoger</button>
                <button onClick={this.envio}>Delivery</button>
               
            </div>
        );
    }

}

export default Seleccionar;



// function Seleccionar() {
//     function handleSubmit(e) {
//       e.preventDefault();
//       console.log('You clicked submit.');
//     }
  
//     return (
//       <form onSubmit={handleSubmit}>
//         <button type="submit">Escoge la forma de envío</button>
//       </form>
//     );
//   }

// export default Seleccionar




// import { useState } from "react"
 
// function Seleccionar ({ opciones, onSelect, defaultOpcion}) {
//     return opciones.map (o => (<>
//     <input onChange={(e) => {
//         onSelect(o.value)
//     }}
//     type="radio"
//     name="endulzante"
//     checked={defaultOpcion === o.value}
//     id={o.value}
//     />

//     <label for={o.value}>{o.text}</label>
    
//     </>));
// }

// export default Seleccionar() {
//     const [opcion, setOpcion] = useState(1);
//     const opciones = [{ value: 1, text: "edulcorante"}, { value: 2, text: "azúcar"}];

//     function opcionSeleccionada(value) {
//        setOpcion(value) 
//     }
// }

