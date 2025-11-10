import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProyectosService {
  constructor() {}

  addValue( newProyecto:ProyectoInterface) {
    newProyecto.id=this.proyectos.length+1;
    this.proyectos.set([...this.proyectos(), newProyecto]);
  }

  proyectos = signal<ProyectoInterface[]>([
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
