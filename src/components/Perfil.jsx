import React from 'react';
import { Card, Button, InputGroup  } from 'react-bootstrap';

class Perfil extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: '', password: '', foto: '', emial: '', equipo: '' };
    this.login;
  }
  cerrarSesion() {
    localStorage.clear();
  }
  componentDidMount() {
    this.setState({
      user: localStorage.getItem('user'),
      password: localStorage.getItem('password'),
      foto: localStorage.getItem('foto'),
      email: localStorage.getItem('email'),
      equipo: localStorage.getItem('equipo'),
    });
  }
  render() {
    if (
      this.state != null &&
      this.state.user != null &&
      this.state.user != ''
    ) {
      return (
         <Card style={{ width: '18rem' }}>
         <Card.Img variant="top" src={this.state.foto} />
         <Card.Body>
           <Card.Title>
           <InputGroup.Text id="basic-addon3">Nombre: {this.state.user} </InputGroup.Text> 
           </Card.Title>
           <Card.Title>
           <InputGroup.Text id="basic-addon3">e-amil: {this.state.email} </InputGroup.Text>
           </Card.Title>
           <Card.Title>
           <InputGroup.Text id="basic-addon3">Equipo: {this.state.equipo} </InputGroup.Text>
           </Card.Title>
         </Card.Body>
         <Button variant="primary" onClick={this.cerrarSesion}>Cerrar sesión</Button>
       </Card>
      );
    } else {
      return (
        <div className="main-site">
          <h1>Aun no has iniciado sesion </h1>
        </div>
      );
    }
  }
}
export default Perfil;
