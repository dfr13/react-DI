import React from 'react';
import ComponenteLista from './ComponenteLista';
export default function Lista(props) {
  const listaElementos = [];
  if (props.elementos !== undefined) {
    for (let i = 0; i < props.elementos.length; i++) {
      listaElementos.push(
        <ComponenteLista 
        done={props.elementos[i].done}
        texto={props.elementos[i].texto}
        prioridad={props.elementos[i].prioridad}/>
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
