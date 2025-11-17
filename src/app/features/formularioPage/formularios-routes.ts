import { Routes } from '@angular/router';
import { FormularioPage } from './pages/formularioPage/formularioPage';
import { FormularioDinamicoPage } from './pages/formularioDinamicoPage/formularioDinamicoPage';
import { FormulariosMorePage } from './pages/FormulariosMorePage/FormulariosMorePage';

export const formulariosRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'basico',
        title: 'Formularios Basicos',
        component: FormularioPage
      },
      {
        path: 'dinamico',
        title: 'Formularios dinamicos',
        component: FormularioDinamicoPage
      },
      {
        path: 'mas',
        title: 'Formularios Mas',
        component: FormulariosMorePage
      },
    ],
  },
];
