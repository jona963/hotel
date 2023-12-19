import { Injectable } from '@angular/core';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private firestore: Firestore) { }

  async createRole(rol: string) {
    try {
      // Crear un documento en la colección "roles" en Firestore
      const roleDocRef = doc(this.firestore, 'roles', rol);
      
      // Set document data
      await setDoc(roleDocRef, {
        // Puedes agregar más información relacionada con el rol si es necesario
      });

      console.log(`Rol ${rol} creado exitosamente.`);
    } catch (error) {
      throw error;
    }
  }
}
