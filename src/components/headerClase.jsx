import React from 'react';
import './componente-lista.css';
class headerClase extends React.Component {
  constructor(props) {
    super(props);
    this.nombre = props.nombre;


  }
  render (){
    return (
      <body>
          <h1{this.props.nombre} />
      </body>
    );
  }
}
export default headerClase;