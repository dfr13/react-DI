import { Home } from '../components/Home';
import { PaginaListas } from '../components/PaginaListas';
import { Perfil } from '../components/Perfil';
export const MenuItems = [
{path:'/' ,id:1 ,title:'Home', components:Home},
{path:'/listas' ,id:2 ,title:'Listas de tareas', components:PaginaListas},
{path:'/perfil' ,id:3 ,title:'Perfil', components:Perfil}
];