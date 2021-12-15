import React from 'react';
import ComponenteLista from './ComponenteLista';
import '/.componente-lista.css';
export default function Lista(props) {
  const listaElementos = [];
  if (props.elementos !== undefined) {
    for (let i = 0; i < props.elementos.length; i++) {
      listaElementos.push(
        <ComponenteLista 
        done={props.elementos[i].donde}
        texto={props.elementos[i].texto}/>
      );
    }
  }

  return (
    <div>
      {props.titulo} {props.nombre}
      <ul>{listaElementos}</ul>
    </div>
  );
}
