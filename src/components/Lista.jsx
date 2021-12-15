import React from 'react';
import ComponenteLista from './ComponenteLista';

export default function Lista(props) {

  const listaElementos= [];

  for (let i=0; i<props.elementos.length;i++){
    listaElementos.push(<ComponenteLista texto={props.elementos[i]}/>)
  }

return(
<div>
{props.titulo } {props.nombre} 
  <ul> 
  {listaElementos}
    </ul>
</div>
);
} 

