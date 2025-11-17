import { Routes } from '@angular/router';
import { HomePage } from './features/homePage/homePage';
import { PerfilPage } from './features/perfilPage/perfilPage';
import { Trabajos as TrabajosPage } from './features/Trabajos/TrabajosPage';
import { ProyectosPage } from './features/ProyectosPage/ProyectosPage';
import { FormularioPage } from './features/formularioPage/pages/formularioPage/formularioPage';
import { formulariosRoutes } from './features/formularioPage/formularios-routes';

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
    component: TrabajosPage,
  },
  {
    path: 'proyectos',
    component: ProyectosPage,
  },
  {
    path: 'formulario',
    loadChildren: () =>
      import('./features/formularioPage/formularios-routes').then((m) => m.formulariosRoutes),
  },
];
