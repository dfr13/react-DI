import React from 'react';
import './style.css';
import Lista from './components/Lista';

export default function App() {
  let listaElementos = ["Elemento1", "Elemento2","Elemento3"];
  listaElementos.push("Elemento4");

  return (
    <div>
      <h1>Primer Componente</h1>
      <Lista titulo="hola1 "nombre="dani" elementos={listaElementos}/>
      <Lista titulo="hola2 "nombre="celia" elementos={listaElementos}/>
      
    </div>
  );
}
