import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Item } from 'src/app/modelos/finanzas.model';
import { EgresosService } from 'src/app/servicios/egresos.service';
import { MatDialog } from '@angular/material/dialog';
import { AddItemComponent } from '../add-item/add-item.component';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.scss']
})
export class EgresosComponent implements OnInit {
  tipoSeleccionado: string = ''; // Asignando un valor predeterminado
  dataSource: Item[] = [];
  formulario: FormGroup;
  formItem: FormGroup | null = null;;

  // Define las columnas de la tabla aquí
  columnas: string[] = ['id', 'item', 'descripcion', 'monto', 'fecha', 'estado', 'nombre', 'descuento'];

  constructor(private dialog: MatDialog, private egresosService: EgresosService) {
    this.formulario = new FormGroup({
      id: new FormControl(),
      item: new FormControl(),
      nombre: new FormControl(),
      estado: new FormControl(),
      descripcion: new FormControl(),
      monto: new FormControl(),
      descuento: new FormControl()
    });

    // Puedes asignar un valor predeterminado aquí si es necesario
    // this.tipoSeleccionado = 'sueldos';
  }

  ngOnInit(): void {
    this.actualizarTabla();
  }

  seleccionarTipo(tipo: string): void {
    this.tipoSeleccionado = tipo;
    // Actualiza la tabla según el tipo de egreso seleccionado
    this.actualizarTabla();
  }

  actualizarTabla(): void {
    this.egresosService.getItem(this.tipoSeleccionado).subscribe(data => {
      this.dataSource = data;
    });
  }

  abrirFormulario(item: Item | null = null): void {
    const dialogRef = this.dialog.open(AddItemComponent, {
      data: { item, esEdicion: !!item, tipoEgreso: this.tipoSeleccionado },
    });

    dialogRef.afterClosed().subscribe((formData: any) => {
      if (formData) {
        if (formData.esEdicion) {
          // Lógica para actualizar los datos en Firestore
          this.egresosService.editItem(formData.tipoEgreso, formData.item).then((response) => {
            console.log(response);
          });
        } else {
          // Lógica para agregar un nuevo registro en Firestore
          this.egresosService.addItem(formData.tipoEgreso, formData.item).then((response) => {
            console.log(response);
          });
        }
      }
    });
  }

  async onClickDelete(item: Item) {
    const response = await this.egresosService.deleteItem(this.tipoSeleccionado, item);
    console.log(response);
  }

  async onClickEdit(item: Item) {
    const response = await this.egresosService.editItem(this.tipoSeleccionado, item);
    console.log(response);
  }
}

