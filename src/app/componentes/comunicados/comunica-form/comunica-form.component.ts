import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


import { Inject } from '@angular/core';

@Component({
  selector: 'app-comunica-form',
  templateUrl: './comunica-form.component.html',
  styleUrls: ['./comunica-form.component.scss']
})
export class ComunicaFormComponent {
  formulario: FormGroup;
  constructor(
    private dialogRef: MatDialogRef<ComunicaFormComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.formulario = this.formBuilder.group({
      id:['', Validators.required],
      titulo: ['', Validators.required],
      contenido: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    if (this.data.item) {
      // Establece los valores iniciales si se proporciona un item para edición
      this.formulario.setValue({
        id: this.data.item.id || '',
        titulo: this.data.item.titulo || '',
        contenido: this.data.item.contenido || '',
      });
    }
  }

  onSubmit() {
    const formData = this.formulario.value;
    const resultado = {
      item: {
        id: formData.id,
        titulo : formData.titulo,
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
