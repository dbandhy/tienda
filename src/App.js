import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItermListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoExiste from './components/NoExiste/NoExiste';
import { CartProvider } from './context/CartContext';
import Compra from './components/Compra/Compra';
import { NotificacionProvider } from './Notification/Notification';
import Formulario from './components/Checkout/Checkout';



function App() {
  




  return (
    <div className="App">

    <NotificacionProvider>
      <CartProvider>
        <BrowserRouter>

          <NavBar/>

          <Routes>
            <Route path='/' element={<ItemListContainer greeting="Bienvenido a la tienda"/>} />
            <Route path='acercade' element={<h1>Acerca de Hi Honey!</h1>}/>
            <Route path='/categoria/:categoriaId' element={<ItemListContainer/>} />
            <Route path='/detalle/:productoId' element={<ItemDetailContainer/>} />
            <Route path='/cart' element={<Compra/>}/>
            <Route path='/checkout' element={<Formulario/>} />
            <Route path='*' element={<NoExiste/>} />
          </Routes>
        </BrowserRouter>
        </CartProvider>  
      </NotificacionProvider>   
    </div>
  );
}

export default App;

