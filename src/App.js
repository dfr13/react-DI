import React from 'react';
import './style.css';
import ListaClase from './components/ListaClase'
import Lista from './components/Lista'

export default function App() {
  let listaElementos = [
    { done: false, texto: 'Tareas de casa', prioridad: 'alta' },
    { done: true, texto: 'Lista de compra' },
    { done: true, texto: 'Sacar la basura', prioridad: 'media' },
    { done: false, texto: 'Comprar pan' },
  ];
  let listaElementos2 = [
    { texto: 'Hacer ABPI', prioridad: 'alta' },
    { done: true, texto: 'Comida gatos' },
    { done: true, texto: 'Sacar la basura', prioridad: 'media' },
    { texto: 'Comprar pan' },
  ];

  return (
    <div>
      <h1>Lista de tareas</h1>
      <ListaClase titulo="Tareas " nombre="dani" elementos={listaElementos} />
      <Lista titulo="Tareas " nombre="Celia" elementos={listaElementos2} />
    </div>
  );
}
