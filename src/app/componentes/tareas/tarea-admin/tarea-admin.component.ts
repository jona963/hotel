import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Tarea } from 'src/app/modelos/tarea.model';
import { TareaService } from 'src/app/servicios/tarea.service';
import { MatDialog } from '@angular/material/dialog';
import { TareaFormComponent } from '../tarea-form/tarea-form.component';


@Component({
  selector: 'app-tarea-admin',
  templateUrl: './tarea-admin.component.html',
  styleUrls: ['./tarea-admin.component.scss']
})
export class TareaAdminComponent implements OnInit{
  nomColeccion: string = 'tareas';
  dataSource: Tarea[] = [];
  formulario: FormGroup;
  formItem: FormGroup | null = null;;

  columnas: string[] = ['nombre', 'encargado', 'contenido'];

  constructor(private dialog: MatDialog, private tareaService: TareaService) {
    this.formulario = new FormGroup({
      id: new FormControl(),
      nombre: new FormControl(),
      encargado: new FormControl(),
      contenido: new FormControl(),
    });
  }

  ngOnInit(): void {
    this.actualizarTabla();
  }

  actualizarTabla(): void {
    this.tareaService.getTarea().subscribe(data => {
      this.dataSource = data;
    });
  }

  abrirFormulario(tarea: Tarea | null = null): void {
    const dialogRef = this.dialog.open(TareaFormComponent, {
      data: { tarea, esEdicion: !!tarea },
    });

    dialogRef.afterClosed().subscribe((formData: any) => {
      if (formData) {
        if (formData.esEdicion) {
          // Lógica para actualizar los datos en Firestore
          this.tareaService.editTarea(formData.item).then((response) => {
            console.log('editar', response);
          });
        } else {
          // Lógica para agregar un nuevo registro en Firestore
          this.tareaService.addTarea(formData.item).then((response) => {
            console.log('nuevo', response);
          });
        }
      }
    });
  }

  async onClickDelete(tarea: Tarea) {
    const response = await this.tareaService.deleteTarea(tarea);
    console.log('borrar', response);
  }

  async onClickEdit(tarea: Tarea) {
    const response = await this.tareaService.editTarea(tarea);
    console.log('editar', response);
  }

}
