import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, setDoc, collectionData, doc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Item } from '../modelos/finanzas.model';

@Injectable({
  providedIn: 'root'
})
export class EgresosService {

  private getCollectionPath(tipoEgreso: string): string {
    // Agrega la lógica para determinar la colección según el tipo de egreso
    switch (tipoEgreso) {
      case 'sueldos':
        return 'sueldos';
      case 'gastos_generales':
        return 'gastos_generales';
        case 'administracion':
          return 'administracion';
          case 'mantencion':
            return 'mantencion';
            case 'gastos_comunes':
            return 'gastos_comunes';
            case 'multas':
              return 'multas';
            case 'otros':
              return 'otros';

          
      default:
        return '';
    }
  }

  constructor(private firestore: Firestore) { }

  addItem(tipoEgreso: string, item: Item) {
    const collectionPath = this.getCollectionPath(tipoEgreso);
    const itemRef = collection(this.firestore, collectionPath);
    return addDoc(itemRef, item);
  }

  getItem(tipoEgreso: string): Observable<Item[]> {
    const collectionPath = this.getCollectionPath(tipoEgreso);
    const itemRef = collection(this.firestore, collectionPath);
    return collectionData(itemRef, { idField: 'id' }) as Observable<Item[]>;
  }

  deleteItem(tipoEgreso: string, item: Item) {
    const collectionPath = this.getCollectionPath(tipoEgreso);
    const itemDocRef = doc(this.firestore, `${collectionPath}/${item.id}`);
    return deleteDoc(itemDocRef);
  }

  editItem(tipoEgreso: string, item: Item) {
    const collectionPath = this.getCollectionPath(tipoEgreso);
    const itemDocRef = doc(this.firestore, `${collectionPath}/${item.id}`);
    return setDoc(itemDocRef, item, { merge: true });
  }

}
