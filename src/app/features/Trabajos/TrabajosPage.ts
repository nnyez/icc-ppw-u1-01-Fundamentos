import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ProyectosService } from './services/proyectos-service';
import { AdministradorProyectos } from "./components/ListManager/administrador-proyectos";
import { ListadoProyectos } from '../ProyectosPage/components/listado-proyectos/listado-proyectos';

@Component({
  selector: 'app-trabajos',
  imports: [ListadoProyectos, AdministradorProyectos],
  templateUrl: './TrabajosPage.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Trabajos {
  proyectosService = inject(ProyectosService);
 }
