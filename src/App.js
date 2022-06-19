import React, { useState } from 'react';

import './App.css';
import Counter from './components/Counter/Counter.js'; 
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItermListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoExiste from './components/NoExiste/NoExiste';

function App() {
  
  const [show, setShow] = useState(true)
//  const [pagina, setPagina] = useState ("Lista")  


  const handleAdd = () => {
    console.log("Se ejecutó")
  }

  return (
    <div className="App">


    {/*  <NavBar/>
      <div>
        <button onClick={() => setPagina("Lista")}>Lista</button>
        <button onClick={() => setPagina("Detalle")}>Detalle</button>
      </div>*/}
      {/*pagina === "Lista" && <ItemListContainer greeting="Bienvenido a la tienda"/>}
      {pagina === "Detalle" && <ItemDetailContainer/>}
  <MercadoLibre/>
      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="Titulo">Hi Honey!</h1>*/}
        {/*<p style={{backgroundColor: "green"}}>
          Bienvenido a mi tienda
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <button>Vamos a aprender</button>
  </header>*/}
  <button onClick= {() => setShow(!show)}> Show/hide </button>
  { show && <Counter initial={0} stock={10} onAdd={handleAdd} /> }
      <BrowserRouter>
        <NavBar/>

        <Routes>
          <Route path='/' element={<ItemListContainer greeting="Bienvenido a la tienda"/>} />
          <Route path='acercade' element={<h1>Acerca de Hi Honey!</h1>}/>
          <Route path='/categoria/:categoriaId' element={<ItemListContainer/>} />
          <Route path='/detalle/:productoId' element={<ItemDetailContainer/>} />
          <Route path='*' element={<NoExiste/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

