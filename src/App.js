/*import React from 'react';
import './style.css';
import ListaClase from './components/ListaClase'
import Lista from './components/Lista'
import headerClase from './components/headerClase'

export default function App() {
  let listaElementos = [
    { done: true, texto: 'Tareas de casa', prioridad: 'alta' },
    { done: false, texto: 'Lista de compra' },
    { done: false, texto: 'Sacar la basura', prioridad: 'media' },
    { done: true, texto: 'Comprar pan' },
  ];
  let listaElementos2 = [
    { texto: 'Hacer ABPI', prioridad: 'alta' },
    { done: true, texto: 'Comida gatos' },
    { done: true, texto: 'Sacar la basura', prioridad: 'media' },
    { texto: 'Comprar pan' },
  ];

  return (
    <div>
      <headerClase titulo ="HEADER"/>
      <h1>Lista de tareas</h1>
      <ListaClase titulo="Tareas " nombre="dani" elementos={listaElementos} />
      <Lista titulo="Tareas " nombre="Celia" elementos={listaElementos2} />
    </div>
  );
}*/
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Home } from './components/Home';
import { PaginaListas } from './components/PaginaListas';
import { Perfil } from './components/Perfil';
import Header from './components/Header';
import BoostrapHeader from './components/BoostrapHeader';
import { MenuItems } from './data/MenuItems';



export default function App() {
  return (
    
    <Router>
    { /* <Header /> */}
      <BoostrapHeader />
      {MenuItems.map((item) => {
        return (
          <Route
          key = {item.id}
          path = {item.path}
          exact
          component = {item.components}
          />
        );
        })}
    </Router>
  );
}

