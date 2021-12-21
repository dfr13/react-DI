import React from 'react';
import ComponenteListaClase from './ComponenteListaClase';
class ListaClase extends React.Component {
  constructor(props) {
    super(props);

    this.listaElementos = [];

    if (props.elementos !== undefined) {
      for (let i = 0; i < props.elementos.length; i++) {
        this.listaElementos.push(
          <ComponenteListaClase
            done={props.elementos[i].done}
            texto={props.elementos[i].texto}
            prioridad={props.elementos[i].prioridad}
          />
        );
      }
    }
    this.state = {
      lista: this.listaElementos,
    };
    this.valorTextInput;
    this.valorSelect;
  }
  anadir() {
    this.listaElementos = this.listaElementos.concat(
      <ComponenteListaClase
        texto={this.valorTextInput.value}
        prioridad={this.valorSelect.value}
      />
    );
    this.setState({ lista: this.listaElementos });
    this.valorTextInput.value = '';
  }
  render() {
    return (
      <div>
        {this.props.titulo} {this.props.nombre}
        <ul>
          {this.listaElementos}
          <li>
            <input
              ref={(vTI) => (this.valorTextInput = vTI)}
              type="text"
              placeholder="Introduce la nueva tarea"
            />
            <br />
            <label for="prioridad">Elige la prioridad </label>
            <select name="prioridad" ref={(vS) => (this.valorSelect = vS)}>
              <option value="alta">Alta</option>
              <option value="media">Media</option>
              <option value="baja">Baja</option>
            </select>
            <br />
            <button onClick={() => this.anadir()}>Añadir</button>
          </li>
        </ul>
      </div>
    );
  }
}
export default ListaClase;
