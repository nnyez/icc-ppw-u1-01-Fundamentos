import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-proyectos-page',
  imports: [],
  templateUrl: './ProyectosPage.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProyectosPage {
  changeName(value: string) {
    this.name.set(value);
  }
  changeDescription(value: string) {
    this.description.set(value);
  }
  name = signal('');
  description = signal('');

  addValue() {
    const newPoryecto: Proyecto = {
      id: this.proyectos().length + 1,
      description: this.name(),
      name: this.name(),
    };
    this.proyectos.set([...this.proyectos(), newPoryecto]);
    this.name.set('');
    this.description.set('');
  }

  proyectos = signal<Proyecto[]>([
    {
      id: 1,
      description: 'Sistema de gestión de inventario',
      name: 'InventoryPro',
    },
    {
      id: 2,
      description: 'Aplicación de comercio electrónico',
      name: 'EasyShop',
    },
    {
      id: 3,
      description: 'Plataforma de aprendizaje en línea',
      name: 'LearnHub',
    },
    {
      id: 4,
      description: 'Sistema de reservas hoteleras',
      name: 'HotelBook',
    },
    {
      id: 5,
      description: 'Aplicación de gestión de tareas',
      name: 'TaskMaster',
    },
  ]);
}
