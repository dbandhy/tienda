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



