import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-perfil-page',
  imports: [RouterLink],
  templateUrl: './perfilPage.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PerfilPage {
  name = signal('Geovanni');
  lastName = signal('Zuniga');
  age = signal(21);

  getFullName() {
    return `${this.name()} ${this.lastName()} con edad ${this.age()} años`;
  }

  changeData() {
    this.name.set('Ana');
    this.lastName.set('Gonzales');
    this.age.set(25);
  }

  resetData() {
    this.name = signal('Geovanni');
    this.lastName = signal('Zuniga');
    this.age = signal(21);
  }

  changeAge() {
    this.age.set(18);
  }
}
