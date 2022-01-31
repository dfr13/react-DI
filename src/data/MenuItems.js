import  Home  from '../components/Home';
import { PaginaListas } from '../components/PaginaListas';
import Perfil  from '../components/Perfil';
import  BoostrapTablaClase  from '../components/BoostrapTablaClase';
import PelisGhibli from '../components/PelisGhibli';
export const MenuItems = [
{path:'/' ,id:1 ,title:'Home', components:Home},
{path:'/listas' ,id:2 ,title:'Listas de tareas', components:PaginaListas},
{path:'/perfil' ,id:3 ,title:'Perfil', components:Perfil},
{path:'/boostraptablaclase' ,id:4 ,title:'Equipos', components:BoostrapTablaClase},
{path:'/pelisgihbili' ,id:5 ,title:'Peliculas', components:PelisGhibli}
];