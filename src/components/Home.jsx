import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: '', password: '' };
    this.login = this.login.bind(this);
  }
  login() {
    this.setState({ user: this.state.value, password: '1234' });
    console.log(`${this.state.user} Enviado`);
  }
  render() {
    if (this.state != null && this.state.user != null && this.state.user!='') {
      return (
        <div className="main-site">
          <h1>Bienvenido{this.state.user}!</h1>
        </div>
      );
    } else {
      return (
        <div className="main-site">
          <h1>Bienvenido!</h1>
          <Container>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre usuario o email</Form.Label>
                <Form.Control type="email" placeholder="Email o usuario" 
                onChange={(e) => this.setState({ user: e.target.value })} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Contraseña" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Recordarme" 
                onChange={(e) => this.setState({ password: e.target.value })}/>
              </Form.Group>
              <Button variant="primary" type="button" onClick={this.login}>
                Entrar
              </Button>
            </Form>
          </Container>
        </div>
      );
    }
  }
}
export default Home;
