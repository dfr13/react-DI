import React from 'react';
import ComponenteLista from './ComponenteLista';

export default function Lista(props) {

 let elementos= [];

  for (let i=0; i<props.elementos.lenght;i++){
    listaElementos.push(<ComponenteLista texto={props.props.listaElementos[i].texto}/>)
  }

return(
<div>{props.titulo } {props.nombre} 
  <ul>{elementos}</ul>
</div>
);
} 

