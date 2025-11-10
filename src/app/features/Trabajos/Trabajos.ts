import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ProyectosService } from './services/proyectos-service';
import { ListManager } from "./components/ListManager/ListManager";
import { ListadoProyectos } from '../ProyectosPage/components/listado-proyectos/listado-proyectos';

@Component({
  selector: 'app-trabajos',
  imports: [ListadoProyectos, ListManager],
  templateUrl: './Trabajos.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Trabajos {
  proyectosService = inject(ProyectosService);
 }
