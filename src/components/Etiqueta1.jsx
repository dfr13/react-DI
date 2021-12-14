import React from 'react';
import ComponenteLista from './ComponenteLista';
export default function Etiqueta1(props) {
return(
<div>{props.titulo } {props.nombre} 
  <ul>
      <ComponenteLista texto="52"/>
      <ComponenteLista texto="53"/>
      <ComponenteLista texto="54"/>
  </ul>
</div>
);
} 

