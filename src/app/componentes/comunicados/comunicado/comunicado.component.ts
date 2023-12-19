import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Comunicado } from 'src/app/modelos/comunicado.model';
import { ComunicadoService } from 'src/app/servicios/comunicado.service';
import { MatDialog } from '@angular/material/dialog';
import { ComunicaFormComponent } from '../comunica-form/comunica-form.component';

@Component({
  selector: 'app-comunicado',
  templateUrl: './comunicado.component.html',
  styleUrls: ['./comunicado.component.scss']
})
export class ComunicadoComponent implements OnInit {
  nomColeccion: string = 'comunicados';
  dataSource: Comunicado[] = [];
  formulario: FormGroup;
  formItem: FormGroup | null = null;;

  columnas: string[] = ['titulo', 'contenido'];

  constructor(private dialog: MatDialog, private comunicadoService: ComunicadoService) {
    this.formulario = new FormGroup({
      id: new FormControl(),
      titulo: new FormControl(),
      contenido: new FormControl(),
      fecha: new FormControl(),
    });
  }

  ngOnInit(): void {
    this.actualizarTabla();
  }

  actualizarTabla(): void {
    this.comunicadoService.getComunica().subscribe(data => {
      this.dataSource = data;
    });
  }

  abrirFormulario(comunicado: Comunicado | null = null): void {
    const dialogRef = this.dialog.open(ComunicaFormComponent, {
      data: { comunicado, esEdicion: !!comunicado },
    });

    dialogRef.afterClosed().subscribe((formData: any) => {
      if (formData) {
        if (formData.esEdicion) {
          // Lógica para actualizar los datos en Firestore
          this.comunicadoService.editComunica(formData.item).then((response) => {
            console.log('editar', response);
          });
        } else {
          // Lógica para agregar un nuevo registro en Firestore
          this.comunicadoService.addComunica(formData.item).then((response) => {
            console.log('nuevo', response);
          });
        }
      }
    });
  }

  async onClickDelete(comunicado: Comunicado) {
    const response = await this.comunicadoService.deleteComunica(comunicado);
    console.log('borrar', response);
  }

  async onClickEdit(comunicado: Comunicado) {
    const response = await this.comunicadoService.editComunica(comunicado);
    console.log('editar', response);
  }



}

