import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount'
import ItemDetailContaimer from './components/ItemDetailContainer/ItemDetailContainer'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <NavBar />
    {/* <ItemListContainer children="¡BIENVENIDO!"/> */}

    <ItemDetailContaimer children = "¡BIENVENIDO!" id="4" />
    <ItemCount stock="15"/>
  </React.StrictMode>
);

reportWebVitals();
