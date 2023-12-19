import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, setDoc, collectionData, doc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Comunicado } from '../modelos/comunicado.model';

@Injectable({
  providedIn: 'root'
})
export class ComunicadoService {

  constructor(private firestore: Firestore) { }

  addComunica(comunicado: Comunicado) {
    const itemRef = collection(this.firestore, 'comunicados');
    return addDoc(itemRef, comunicado);
  }

  getComunica(): Observable<Comunicado[]> {
    const itemRef = (collection(this.firestore, 'comunicados'));
    return collectionData(itemRef,{ idField: 'id' }) as Observable<Comunicado[]>;
  }

  editComunica(comunicado: Comunicado){
    const itemDocRef = doc(this.firestore, 'comunicados');
    return setDoc(itemDocRef, { idField: 'id' }, { merge: true });
  }

  deleteComunica(comunicado: Comunicado) {
    const itemDocRef = doc(this.firestore, `${'comunicados'}/${comunicado.id}`);
    return deleteDoc(itemDocRef);
  }

}
