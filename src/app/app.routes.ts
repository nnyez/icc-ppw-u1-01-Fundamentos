import { Routes } from '@angular/router';
import { HomePage } from './features/homePage/homePage';
import { PerfilPage } from './features/perfilPage/perfilPage';
import { Trabajos } from './features/Trabajos/Trabajos';
import { ProyectosPage } from './features/ProyectosPage/ProyectosPage';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'perfil',
    component: PerfilPage,
  },
  {
    path: 'trabajos',
    component: Trabajos,
  },
  {
    path: 'proyectos',
    component: ProyectosPage,
  },
];
