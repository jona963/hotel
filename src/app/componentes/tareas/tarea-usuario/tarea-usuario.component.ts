import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Tarea } from 'src/app/modelos/tarea.model';
import { TareaService } from 'src/app/servicios/tarea.service';
import { MatDialog } from '@angular/material/dialog';
import { TareaFormComponent } from '../tarea-form/tarea-form.component';

@Component({
  selector: 'app-tarea-usuario',
  templateUrl: './tarea-usuario.component.html',
  styleUrls: ['./tarea-usuario.component.scss']
})
export class TareaUsuarioComponent implements OnInit {

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

}
