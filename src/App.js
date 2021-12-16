import React from 'react';
import './style.css';
import Lista from './components/Lista';

export default function App() {
  let listaElementos = [
    { done: false, texto: 'Tareas de casa', prioridad:'alta' },
    { done: true, texto: 'Lista de compra'},
    { done: false, texto: 'Sacar la basura'}, 
    { done: false, texto: 'Comprar pan' },
  ];

  return (
    <div>
      <h1>Lista de tareas</h1>
      <Lista titulo="Tareas " nombre="dani" elementos={listaElementos} />
      <Lista titulo="Tareas " nombre="Celia" elementos={listaElementos} />
    </div>
  );
}
