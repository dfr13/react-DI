import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import { MenuItems } from '../data/MenuItems';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  createMenuLinks() {
    const listaComponentes = [];
    for (let i = 0; i < MenuItems.length; i++) {
      listaComponentes.push(
        <li>
          <Link to={MenuItems[i].path}>{MenuItems[i].title}</Link>
        </li>
      );
    }
    return listaComponentes;
  }
  render() {
    return (
      <nav>
        <h1>Mi aplicación</h1>
       {/* <ul>
          FORMA 1 METODO CON FOR
          {this.createMenuLinks()}
        </ul>*/}
       {/* <ul>
          FORMA 2 con MAP
          {MenuItems.map(function(item){
            return (
             <li>
             <Link to={item.path}>{item.title}</Link>
           </li>
            );
          })}
        </ul>*/}
        <ul>
          {/*FORMA 3 con MAP Y FLECHA*/}
          {MenuItems.map((item)=>{
            return (
             <li key ={item.id}>
             <Link to={item.path}>{item.title}</Link>
           </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Header;
