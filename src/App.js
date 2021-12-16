import React from 'react';
import './style.css';
import Lista from './components/Lista';

export default function App() {
  let listaElementos = [
    { done: false, texto: 'Elemento 1', prioridad:'alta' },
    { done: true, texto: 'Elemento 2'},
    { done: false, texto: 'Elemento 3'  },
  ];

  return (
    <div>
      <h1>Primer Componente</h1>
      <Lista titulo="hola1 " nombre="dani" elementos={listaElementos} />
    </div>
  );
}
