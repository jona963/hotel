import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-finanzas',
  templateUrl: './finanzas.component.html',
  styleUrls: ['./finanzas.component.scss']
})
export class FinanzasComponent implements OnInit{
  ngOnInit(): void {
    
  }
  mostrarIngresos: boolean = true;
  mostrarEgresos: boolean = true;

}
