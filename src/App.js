import React from 'react';

import './App.css';
import Counter from './components/Counter/Counter.js'; 
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItermListContainer/ItemListContainer';


function App() {

 
  return (
    <div className="App">
      <NavBar/> 
      <ItemListContainer greeting="Bienvenido a la tienda"/>
      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="Titulo">Hi Honey!</h1>
        <p style={{backgroundColor: "green"}}>
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
  <Counter initial={0} stock={10} title="Contador" />
  
    </div>
  );
}

export default App;
