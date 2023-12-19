import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { itemPago } from '../modelos/pagos.model';


@Injectable({
  providedIn: 'root'
})
export class HistorialPagosService {

  constructor(private firestore: Firestore) {}

  getPagos(): Observable<itemPago[]> {
    const pagosRef = collection(this.firestore, 'pagos');
    return collectionData(pagosRef, { idField: 'id' }) as Observable<itemPago[]>;
  }
}

