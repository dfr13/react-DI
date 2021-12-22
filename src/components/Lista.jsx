import React, { useState, useRef } from 'react';
import ComponenteLista from './ComponenteLista';

export default function Lista(props) {
  const listaInicial = [];
  if (props.elementos !== undefined) {
    for (let i = 0; i < props.elementos.length; i++) {
      listaInicial.push(
        <ComponenteLista
          done={props.elementos[i].done}
          texto={props.elementos[i].texto}
          prioridad={props.elementos[i].prioridad}
        />
      );
    }
  }
  const [listaElementos, setListaElementos] = useState([listaInicial]);
  const valorTextInput = useRef();
  const valorSelect = useRef();

  const funcion = function anadir() {
    const newLista = listaElementos.concat(
      <ComponenteLista
        texto={valorTextInput.current.value}
        prioridad={valorSelect.current.value}
      />
    );
    setListaElementos(newLista);
    valorTextInput.current.value = '';
  };

  return (
    <div>
      {props.titulo} {props.nombre}
      <ul>
        {listaElementos}
        <li>
          <input
            ref={valorTextInput}
            type="text"
            placeholder="Introduce la nueva tarea"
          />
          <br />
          <label for="prioridad">Elige la prioridad </label>
          <select name="prioridad" ref={valorSelect}>
            <option value="alta">Alta</option>
            <option value="media">Media</option>
            <option value="baja">Baja</option>
          </select>
          <br />
          <button onClick={funcion}>Añadir</button>
        </li>
      </ul>
    </div>
  );
}
