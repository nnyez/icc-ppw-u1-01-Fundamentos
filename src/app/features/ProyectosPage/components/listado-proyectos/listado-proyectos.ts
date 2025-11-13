import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-listado-proyectos',
  imports: [],
  templateUrl: './listado-proyectos.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListadoProyectos {
  listName = input.required<string>();
  list = input.required<ProyectoInterface[]>();
}
