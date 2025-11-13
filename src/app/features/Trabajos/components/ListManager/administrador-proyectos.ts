import { ChangeDetectionStrategy, Component, inject, output, signal } from '@angular/core';
import { ProyectosService } from '../../services/proyectos-service';

@Component({
  selector: 'app-list-manager',
  imports: [],
  templateUrl: './administrador-proyectos.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdministradorProyectos {

  changeName(value: string) {
    this.name.set(value);
  }
  changeDescription(value: string) {
    this.description.set(value);
  }
  name = signal('');
  description = signal('');

  newProyecto = output<ProyectoInterface>();
  removeListener = output<string>();

  addValue() {
    const newProyecto: ProyectoInterface = {
      id:0,
      description: this.name(),
      name: this.description(),
    };

    this.newProyecto.emit(newProyecto);

    this.name.set('');
    this.description.set('');
  }

  removeValue(){
    this.removeListener.emit(this.name());
  }
}
