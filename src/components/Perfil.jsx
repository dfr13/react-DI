import React from 'react';
import { MenuUsuarios } from '../data/MenuUsuarios';

class Perfil extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: '', password: '' };
    this.login;
  }
  componentDidMount() {
    this.setState({
      user: localStorage.getItem('user'),
      password: localStorage.getItem('password'),
    });
  }
  compruebaLogin() {
    this.login = false;
    MenuUsuarios.map((item) => {
      if (
        this.state.user === item.nombre &&
        this.state.password === item.password
      ) {
       // this.setState({this.login : true})

      } else {
        this.login=false;
      }
    });
  }
  render() {
    if (this.compruebaLogin()){ 
      return (
    <div className="main-site">
       <h1>Bienvenido {this.state.user}!</h1>
    </div>);
    } else {
      return (
        <div className="main-site">
           <h1>Bienvenido!</h1>
        </div>);
    }
   
    /*return (MenuUsuarios.map((item) => {
      if (
        this.state != null &&
        this.state.user != null &&
        this.state.user != '' &&
        this.state.user === item.nombre
      ) {
        return (
          <div className="main-site">
            <h1>Bienvenido {this.state.user}!</h1>
          </div>
        );
      } else {
        return (
          <div className="main-site">
            <h1>Bienvenido!</h1>
          </div>
        );
      }
    }));*/
  }
}
export default Perfil;
