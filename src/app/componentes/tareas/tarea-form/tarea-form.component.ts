import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-tarea-form',
  templateUrl: './tarea-form.component.html',
  styleUrls: ['./tarea-form.component.scss']
})
export class TareaFormComponent {
  formulario: FormGroup;
  constructor(
    private dialogRef: MatDialogRef<TareaFormComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.formulario = this.formBuilder.group({
      id:['', Validators.required],
      nombre: ['', Validators.required],
      encargado: ['', Validators.required],
      contenido: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    if (this.data.item) {
      // Establece los valores iniciales si se proporciona un item para edición
      this.formulario.setValue({
        id: this.data.item.id || '',
        nombre: this.data.item.nombre || '',
        encargado: this.data.item.encargado || '',
        contenido: this.data.item.contenido || '',
      });
    }
  }

  onSubmit() {
    const formData = this.formulario.value;
    const resultado = {
      item: {
        id: formData.id,
        nombre: formData.nombre,
        encargado: formData.encargado,
        contenido: formData.contenido,
      },
      esEdicion: this.data.esEdicion,
    };
    this.dialogRef.close(resultado);
  }

  cancelar(): void {
    this.dialogRef.close();
  }

}
