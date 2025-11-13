import { effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProyectosService {
  constructor() {
    effect(() => {
      const value = this.proyectos();
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(value));
    });
  }

  private readonly STORAGE_KEY = 'proyectosApp';

  addValue(newProyecto: ProyectoInterface) {
    newProyecto.id = this.proyectos().length + 1;
    this.proyectos.set([...this.proyectos(), newProyecto]);
    console.log(this.proyectos.length);
  }

  removeValue() {
    this.proyectos.set(this.proyectos().slice(1));
  }

  proyectos = signal<ProyectoInterface[]>(this.loadProyectos());

  private loadProyectos(): ProyectoInterface[] {
    const value = localStorage.getItem(this.STORAGE_KEY);
    return value
      ? JSON.parse(value)
      : [
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
        ];
  }
}
