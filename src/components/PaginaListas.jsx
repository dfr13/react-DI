import React from 'react';

import Lista from './Lista';
import ListaClase from './ListaClase';

export function PaginaListas() {
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
      <h1>Listas de tareas</h1>
      <ListaClase titulo="Tareas " nombre="dani" elementos={listaElementos} />
      <Lista titulo="Tareas " nombre="Celia" elementos={listaElementos2} />
    </div>
  );
}