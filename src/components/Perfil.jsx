import React from 'react';
import { Card } from 'react-bootstrap';

class Perfil extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: '', password: '', foto: '', emial: '', equipo: '' };
    this.login;
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
              Nombre:  {this.state.user} 
           </Card.Title>
           <Card.Title>
             e-amil: {this.state.email} 
           </Card.Title>
           <Card.Title>
              Equipo: {this.state.equipo}
           </Card.Title>
         </Card.Body>
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
