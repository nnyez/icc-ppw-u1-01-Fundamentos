import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-formulario-page',
  imports: [ReactiveFormsModule],
  templateUrl: './formularioPage.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormularioPage {
  onSubmit() {
    console.log(this.myform);
    if (this.myform.invalid) {
      this.myform.markAllAsTouched();
      return;
    }
    console.log('Datos del formulario', this.myform.value);
    alert('Formulario enviado correctamente');
    this.myform.reset();
  }

  private fb = inject(FormBuilder);

  isValidField(fieldName: string) {
    return this.myform.controls[fieldName].errors && this.myform.controls[fieldName].touched;
  }

  getFieldError(fieldName: string) {
    if (!this.myform.controls[fieldName]) return null;

    const errors = this.myform.controls[fieldName].errors ?? {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido';
        case 'minlength':
          return `Minimo de ${errors['minlength'].requiredLength} caracteres`;
        case 'min':
          return `valor minimo ${errors['min'].min}`;
        case 'email':
          return 'Formato de correo invalido';
      }
    }
    return null;
  }

  myform: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    edad: [0, [Validators.required, Validators.min(18)]],
    correo: ['', [Validators.required, Validators.email]],
  });
}
