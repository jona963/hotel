import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  formulario: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<AddItemComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.formulario = this.formBuilder.group({
      id: ['', Validators.required],
      item: ['', Validators.required],
      descripcion: ['', Validators.required],
      monto: ['', Validators.required],
      estado: ['', Validators.required],
      nombre: ['', Validators.required],
      descuento: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    if (this.data.item) {
      // Establece los valores iniciales si se proporciona un item para edición
      this.formulario.setValue({
        id: this.data.item.id || '',
        item: this.data.item.item || '',
        nombre: this.data.item.nombre || '',
        estado: this.data.item.estado || '',
        descripcion: this.data.item.descripcion || '',
        monto: this.data.item.monto || null,
        descuento: this.data.item.descuento || null,
      });
    }
  }

  onSubmit() {
    const formData = this.formulario.value;
    const resultado = {
      item: {
        id:formData.id,
        item: formData.item,
        nombre: formData.nombre,
        estado: formData.estado,
        descripcion: formData.descripcion,
        monto: formData.monto,
        descuento: formData.descuento,
      },
      esEdicion: this.data.esEdicion,
      tipoEgreso: this.data.tipoEgreso,
    };
    this.dialogRef.close(resultado);
  }
  

  cancelar(): void {
    this.dialogRef.close();
  }
}