import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, setDoc, collectionData, doc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Tarea } from '../modelos/tarea.model';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  constructor(private firestore: Firestore) { }

  addTarea(tarea: Tarea) {
    const itemRef = collection(this.firestore, 'tareas');
    return addDoc(itemRef, tarea);
  }

  getTarea(): Observable<Tarea[]> {
    const itemRef = (collection(this.firestore, 'tareas'));
    return collectionData(itemRef,{ idField: 'id' }) as Observable<Tarea[]>;
  }

  editTarea(tarea: Tarea){
    const itemDocRef = doc(this.firestore, `${'tareas'}/${tarea.id}`);
    return setDoc(itemDocRef, tarea, { merge: true });
  }

  deleteTarea(tarea: Tarea) {
    const itemDocRef = doc(this.firestore, `${'tareas'}/${tarea.id}`);
    return deleteDoc(itemDocRef);
  }
}
