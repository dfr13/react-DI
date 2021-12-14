import React from 'react';
import './style.css';
import Etiqueta1 from './components/Etiqueta1';

export default function App() {

  return (
    <div>
      <h1>Primer Componente</h1>
      <Etiqueta1 titulo="hola1 "nombre="dani"/>
      <Etiqueta1 titulo="hola2 "nombre="celia"/>
      
    </div>
  );
}
