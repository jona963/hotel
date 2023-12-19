import { Component, OnInit } from '@angular/core';
import { HistorialPagosService } from '../../servicios/historial-pagos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-historial-pagos',
  templateUrl: './historial-pagos.component.html',
  styleUrls: ['./historial-pagos.component.scss']
})
export class HistorialPagosComponent implements OnInit {
  pagos!: any[];

  constructor(private historialPagosService: HistorialPagosService) { }
  
  ngOnInit() {
    this.historialPagosService.getPagos().subscribe({
      next: (pagos) => {
        this.pagos = pagos;
      },
      error: (error) => {
        console.error('Error al obtener el historial de pagos:', error);
      }
    });
  }
}

