import React, { useState } from 'react';

import './App.css';
import Counter from './components/Counter/Counter.js'; 
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItermListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoExiste from './components/NoExiste/NoExiste';
import { CartProvider } from './context/CartContext';
import Compra from './components/Compra/Compra';
import { NotificacionProvider } from './Notification/Notification';



function App() {
  
  const [show, setShow] = useState(true)
//  const [pagina, setPagina] = useState ("Lista")




  const handleAdd = () => {
    console.log("Se ejecutó")
  }

  return (
    <div className="App">

  <button onClick= {() => setShow(!show)}> Show/hide </button>
  { show && <Counter initial={0} stock={10} onAdd={handleAdd} /> }
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
            {/* <Route path='/checkout' element={<Checkout/>} /> */}
            <Route path='*' element={<NoExiste/>} />
          </Routes>
        </BrowserRouter>
        </CartProvider>  
      </NotificacionProvider>   
    </div>
  );
}

export default App;

