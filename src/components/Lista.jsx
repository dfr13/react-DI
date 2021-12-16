import React from 'react';
import ComponenteListaClase from './ComponenteListaClase';
export default function Lista(props) {
  const listaElementos = [];
  if (props.elementos !== undefined) {
    for (let i = 0; i < props.elementos.length; i++) {
      listaElementos.push(
        <ComponenteListaClase
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
